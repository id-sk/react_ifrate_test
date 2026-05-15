#!/bin/bash

# Adresáre
SVG_DIR="svg"
OUTPUT_DIR="."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../../" && pwd)"

# Overenie existencie SVG adresára
if [ ! -d "$SVG_DIR" ]; then
  echo "Chyba: Adresár '$SVG_DIR' neexistuje."
  exit 1
fi

echo "Generujem ikony zo zložky $SVG_DIR..."

# Prechádzanie všetkých .svg súborov
for svg_file in "$SVG_DIR"/*.svg; do
  if [ ! -f "$svg_file" ]; then
    continue
  fi

  # Názov súboru bez cesty a prípony
  filename=$(basename "$svg_file" .svg)
  # Názov komponentu (CamelCase - predpokladáme, že SVG sú už v správnom formáte)
  # Ak začína číslom, pridáme predponu 'Icon'
  if [[ $filename =~ ^[0-9] ]]; then
    component_name="Icon$filename"
  else
    component_name="$filename"
  fi
  output_file="$OUTPUT_DIR/$component_name.tsx"

  echo "Spracovávam $filename..."

  # Extrakcia viewBox
  viewbox=$(grep -o 'viewBox="[^"]*"' "$svg_file" | head -1)
  
  # Extrakcia obsahu vnútri <svg>...</svg>
  # Odstránime xmlns, šírku, výšku a transformujeme na React-friendly (napr. stroke-width -> strokeWidth)
  # Pre jednoduchosť vezmeme všetko medzi prvým > a posledným </svg>
  # A nahradíme fixné farby (fill="#...") za fill="currentColor" tam, kde je to žiaduce
  
  content=$(sed '1,/<svg/d; /<\/svg>/d' "$svg_file")
  # Ak je svg na jednom riadku, potrebujeme iný prístup
  if [ -z "$content" ]; then
      content=$(sed -e 's/.*<svg[^>]*>//' -e 's/<\/svg>.*//' "$svg_file")
  fi

  # Vyčistenie obsahu a transformácia atribútov (základné mapovanie)
  content=$(echo "$content" | sed 's/fill="#[A-Fa-f0-9]\{6\}"/fill="currentColor"/g')
  content=$(echo "$content" | sed 's/fill-rule=/fillRule=/g')
  content=$(echo "$content" | sed 's/fill-opacity=/fillOpacity=/g')
  content=$(echo "$content" | sed 's/clip-rule=/clipRule=/g')
  content=$(echo "$content" | sed 's/clip-path=/clipPath=/g')
  content=$(echo "$content" | sed 's/stroke-width=/strokeWidth=/g')
  content=$(echo "$content" | sed 's/stroke-linecap=/strokeLinecap=/g')
  content=$(echo "$content" | sed 's/stroke-linejoin=/strokeLinejoin=/g')
  content=$(echo "$content" | sed 's/stroke-dasharray=/strokeDasharray=/g')
  content=$(echo "$content" | sed 's/stroke-dashoffset=/strokeDashoffset=/g')
  content=$(echo "$content" | sed 's/stroke-opacity=/strokeOpacity=/g')
  content=$(echo "$content" | sed 's/stop-color=/stopColor=/g')
  content=$(echo "$content" | sed 's/stop-opacity=/stopOpacity=/g')
  content=$(echo "$content" | sed 's/font-size=/fontSize=/g')
  content=$(echo "$content" | sed 's/font-weight=/fontWeight=/g')
  content=$(echo "$content" | sed 's/font-family=/fontFamily=/g')
  content=$(echo "$content" | sed 's/text-anchor=/textAnchor=/g')
  content=$(echo "$content" | sed 's/letter-spacing=/letterSpacing=/g')

  # Generovanie TSX
  cat <<EOF > "$output_file"
import React from 'react';

export interface ${component_name}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ${component_name} = ({ size, ...props }: ${component_name}Props) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      $viewbox
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      $content
    </svg>
  );
};

export default ${component_name};
EOF

done

echo "Spúšťam Prettier na vygenerovaných súboroch..."
cd "$REPO_ROOT" && pnpm exec prettier --write "packages/core/src/assets/icons/*.tsx"

echo "Hotovo! Ikony boli vygenerované."
