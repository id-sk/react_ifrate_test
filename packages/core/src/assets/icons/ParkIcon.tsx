import React from 'react';

export interface ParkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ParkIcon = ({ size, ...props }: ParkIconProps) => {
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
      
<path d="M17.6562 12.5002H19.7395L12.4478 2.0835L5.20825 12.5002H7.2395L3.177 18.7502H10.3853V22.9168H14.5103V18.7502H21.8228L17.6562 12.5002Z" fill="currentColor"/>
    </svg>
  );
};

export default ParkIcon;
