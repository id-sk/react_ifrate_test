import React from 'react';

export interface BarChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BarChartIcon = ({ size, ...props }: BarChartIconProps) => {
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
      
<path d="M8.33341 9.37508H4.16675V20.8334H8.33341V9.37508Z" fill="currentColor"/>
<path d="M20.8334 13.5417H16.6667V20.8334H20.8334V13.5417Z" fill="currentColor"/>
<path d="M14.5834 4.16675H10.4167V20.8334H14.5834V4.16675Z" fill="currentColor"/>
    </svg>
  );
};

export default BarChartIcon;
