import React from 'react';

export interface WaterfallChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WaterfallChartIcon = ({ size, ...props }: WaterfallChartIconProps) => {
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
      
<path d="M18.75 4.1665H21.875V20.8332H18.75V4.1665ZM3.125 13.5415H6.25V20.8332H3.125V13.5415ZM14.5833 4.1665H17.7083V7.2915H14.5833V4.1665ZM10.4167 5.20817H13.5417V9.37484H10.4167V5.20817ZM7.29167 10.4165H10.4167V14.5832H7.29167V10.4165Z" fill="currentColor"/>
    </svg>
  );
};

export default WaterfallChartIcon;
