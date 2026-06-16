import React from 'react';

export interface NoCellIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoCellIcon = ({ size, ...props }: NoCellIconProps) => {
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
      
<path d="M9.94263 6.24984L6.08846 2.39567C6.39054 1.61442 7.15096 1.0415 8.03638 1.0415L18.453 1.05192C19.5989 1.05192 20.5364 1.979 20.5364 3.12484V16.8436L18.453 14.7603V6.24984H9.94263ZM21.3489 23.5519L20.401 22.604C20.0989 23.3853 19.3385 23.9582 18.453 23.9582H8.03638C6.89054 23.9582 5.95304 23.0207 5.95304 21.8748V8.15609L2.19263 4.39567L3.66138 2.92692L22.8072 22.0728L21.3489 23.5519ZM16.5468 18.7498L8.03638 10.2394V18.7498H16.5468Z" fill="currentColor"/>
    </svg>
  );
};

export default NoCellIcon;
