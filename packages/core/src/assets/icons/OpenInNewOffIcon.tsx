import React from 'react';

export interface OpenInNewOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OpenInNewOffIcon = ({ size, ...props }: OpenInNewOffIconProps) => {
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
      
<path d="M18.2343 5.30208L15.328 2.38542H22.6197V9.67708L19.7135 6.76042L15.453 11.0208L13.9843 9.55208L18.2343 5.30208ZM20.5364 12.7604V16.1042L22.6197 18.1875V12.7604H20.5364ZM21.3489 22.8125L19.6718 21.1354H5.95304C4.79679 21.1354 3.86971 20.1979 3.86971 19.0521V5.33333L2.19263 3.65625L3.66138 2.1875L22.8072 21.3333L21.3489 22.8125ZM17.5885 19.0521L12.5051 13.9688L10.8489 15.625L9.38013 14.1563L11.0364 12.5L5.95304 7.41667V19.0521H17.5885ZM8.90096 4.46875H12.2447V2.38542H6.81763L8.90096 4.46875Z" fill="currentColor"/>
    </svg>
  );
};

export default OpenInNewOffIcon;
