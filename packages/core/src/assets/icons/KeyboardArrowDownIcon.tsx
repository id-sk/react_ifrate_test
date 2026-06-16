import React from 'react';

export interface KeyboardArrowDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowDownIcon = ({ size, ...props }: KeyboardArrowDownIconProps) => {
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
      
<path d="M7.71875 8.64062L12.5 13.4115L17.2812 8.64062L18.75 10.1094L12.5 16.3594L6.25 10.1094L7.71875 8.64062Z" fill="currentColor"/>
    </svg>
  );
};

export default KeyboardArrowDownIcon;
