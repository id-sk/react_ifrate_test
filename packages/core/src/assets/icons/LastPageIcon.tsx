import React from 'react';

export interface LastPageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LastPageIcon = ({ size, ...props }: LastPageIconProps) => {
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
      
<path d="M6.03638 7.71875L10.8176 12.5L6.03638 17.2812L7.50513 18.75L13.7551 12.5L7.50513 6.25L6.03638 7.71875ZM16.8801 6.25H18.9635V18.75H16.8801V6.25Z" fill="currentColor"/>
    </svg>
  );
};

export default LastPageIcon;
