import React from 'react';

export interface ExpandMoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ExpandMoreIcon = ({ size, ...props }: ExpandMoreIconProps) => {
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
      
<path d="M17.2812 8.64062L12.5 13.4115L7.71875 8.64062L6.25 10.1094L12.5 16.3594L18.75 10.1094L17.2812 8.64062Z" fill="currentColor"/>
    </svg>
  );
};

export default ExpandMoreIcon;
