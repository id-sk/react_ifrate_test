import React from 'react';

export interface VerticalDistributeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalDistributeIcon = ({ size, ...props }: VerticalDistributeIconProps) => {
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
      
<path d="M22.9166 2.08325V4.16659H2.08325V2.08325H22.9166ZM7.29159 10.9374V14.0624H17.7083V10.9374H7.29159ZM2.08325 20.8333V22.9166H22.9166V20.8333H2.08325Z" fill="currentColor"/>
    </svg>
  );
};

export default VerticalDistributeIcon;
