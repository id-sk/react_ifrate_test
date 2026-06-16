import React from 'react';

export interface LaptopChromebookIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LaptopChromebookIcon = ({ size, ...props }: LaptopChromebookIconProps) => {
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
      
<path d="M22.9167 19.2708V3.64575H2.08333V19.2708H0V21.3541H25V19.2708H22.9167ZM14.5833 19.2708H10.4167V18.2291H14.5833V19.2708ZM20.8333 16.1458H4.16667V5.72909H20.8333V16.1458Z" fill="currentColor"/>
    </svg>
  );
};

export default LaptopChromebookIcon;
