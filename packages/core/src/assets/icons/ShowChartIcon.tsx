import React from 'react';

export interface ShowChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShowChartIcon = ({ size, ...props }: ShowChartIconProps) => {
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
      
<path d="M3.64575 19.2603L9.89575 12.9999L14.0624 17.1666L22.9166 7.20825L21.4478 5.7395L14.0624 14.0416L9.89575 9.87492L2.08325 17.6978L3.64575 19.2603Z" fill="currentColor"/>
    </svg>
  );
};

export default ShowChartIcon;
