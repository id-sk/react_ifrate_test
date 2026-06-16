import React from 'react';

export interface ArrowBackIosIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowBackIosIcon = ({ size, ...props }: ArrowBackIosIconProps) => {
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
      
<path d="M18.5781 4.03125L16.7344 2.1875L6.42188 12.5L16.7344 22.8125L18.5781 20.9688L10.1094 12.5L18.5781 4.03125Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowBackIosIcon;
