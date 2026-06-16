import React from 'react';

export interface PlusOneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlusOneIcon = ({ size, ...props }: PlusOneIconProps) => {
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
      
<path d="M10.9375 8.854H8.85417V13.0207H4.6875V15.104H8.85417V19.2707H10.9375V15.104H15.1042V13.0207H10.9375V8.854ZM15.625 6.854V8.74984L18.2292 8.229V19.2707H20.3125V5.729L15.625 6.854Z" fill="currentColor"/>
    </svg>
  );
};

export default PlusOneIcon;
