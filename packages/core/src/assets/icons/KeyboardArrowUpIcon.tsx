import React from 'react';

export interface KeyboardArrowUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowUpIcon = ({ size, ...props }: KeyboardArrowUpIconProps) => {
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
      
<path d="M7.71875 16.3594L12.5 11.5885L17.2812 16.3594L18.75 14.8906L12.5 8.64062L6.25 14.8906L7.71875 16.3594Z" fill="currentColor"/>
    </svg>
  );
};

export default KeyboardArrowUpIcon;
