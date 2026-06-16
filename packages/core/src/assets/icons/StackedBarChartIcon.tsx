import React from 'react';

export interface StackedBarChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StackedBarChartIcon = ({ size, ...props }: StackedBarChartIconProps) => {
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
<path d="M8.33341 4.16675H4.16675V8.33341H8.33341V4.16675Z" fill="currentColor"/>
<path d="M14.5834 7.29175H10.4167V11.4584H14.5834V7.29175Z" fill="currentColor"/>
<path d="M20.8334 10.4167H16.6667V14.5834H20.8334V10.4167Z" fill="currentColor"/>
<path d="M20.8334 15.6251H16.6667V20.8334H20.8334V15.6251Z" fill="currentColor"/>
<path d="M14.5834 12.5001H10.4167V20.8334H14.5834V12.5001Z" fill="currentColor"/>
    </svg>
  );
};

export default StackedBarChartIcon;
