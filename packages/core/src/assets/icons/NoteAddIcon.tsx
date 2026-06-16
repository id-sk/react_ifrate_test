import React from 'react';

export interface NoteAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoteAddIcon = ({ size, ...props }: NoteAddIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M14.5834 2.08337H6.25008C5.10425 2.08337 4.17716 3.02087 4.17716 4.16671L4.16675 20.8334C4.16675 21.9792 5.09383 22.9167 6.23966 22.9167H18.7501C19.8959 22.9167 20.8334 21.9792 20.8334 20.8334V8.33337L14.5834 2.08337ZM16.6667 16.6667H13.5417V19.7917H11.4584V16.6667H8.33341V14.5834H11.4584V11.4584H13.5417V14.5834H16.6667V16.6667ZM13.5417 9.37504V3.64587L19.2709 9.37504H13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default NoteAddIcon;
