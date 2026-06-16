import React from 'react';

export interface DashboardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DashboardIcon = ({ size, ...props }: DashboardIconProps) => {
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
      
<path d="M3.125 13.5417H11.4583V3.125H3.125V13.5417ZM3.125 21.875H11.4583V15.625H3.125V21.875ZM13.5417 21.875H21.875V11.4583H13.5417V21.875ZM13.5417 3.125V9.375H21.875V3.125H13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default DashboardIcon;
