import React from 'react';

export interface MovieIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MovieIcon = ({ size, ...props }: MovieIconProps) => {
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
      
<path d="M18.7499 4.16663L20.8333 8.33329H17.7083L15.6249 4.16663H13.5416L15.6249 8.33329H12.4999L10.4166 4.16663H8.33325L10.4166 8.33329H7.29159L5.20825 4.16663H4.16659C3.02075 4.16663 2.09367 5.10413 2.09367 6.24996L2.08325 18.75C2.08325 19.8958 3.02075 20.8333 4.16659 20.8333H20.8333C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V4.16663H18.7499Z" fill="currentColor"/>
    </svg>
  );
};

export default MovieIcon;
