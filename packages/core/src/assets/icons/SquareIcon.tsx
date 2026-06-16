import React from 'react';

export interface SquareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SquareIcon = ({ size, ...props }: SquareIconProps) => {
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
      
<path d="M21.875 3.125H3.125V21.875H21.875V3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default SquareIcon;
