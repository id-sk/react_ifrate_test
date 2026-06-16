import React from 'react';

export interface TrendingDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TrendingDownIcon = ({ size, ...props }: TrendingDownIconProps) => {
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
      
<path d="M16.6667 18.75L19.0521 16.3646L13.9688 11.2812L9.80212 15.4479L2.08337 7.71875L3.55212 6.25L9.80212 12.5L13.9688 8.33333L20.5313 14.8854L22.9167 12.5V18.75H16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default TrendingDownIcon;
