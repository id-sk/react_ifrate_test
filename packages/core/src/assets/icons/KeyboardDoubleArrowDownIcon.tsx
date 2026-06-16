import React from 'react';

export interface KeyboardDoubleArrowDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardDoubleArrowDownIcon = ({ size, ...props }: KeyboardDoubleArrowDownIconProps) => {
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
      
<path d="M18.75 6.677L17.2812 5.20825L12.5 9.97908L7.71875 5.20825L6.25 6.677L12.5 12.927L18.75 6.677Z" fill="currentColor"/>
<path d="M18.75 13.5416L17.2812 12.0728L12.5 16.8437L7.71875 12.0728L6.25 13.5416L12.5 19.7916L18.75 13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default KeyboardDoubleArrowDownIcon;
