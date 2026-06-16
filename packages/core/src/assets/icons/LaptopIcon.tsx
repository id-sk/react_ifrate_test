import React from 'react';

export interface LaptopIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LaptopIcon = ({ size, ...props }: LaptopIconProps) => {
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
      
<path d="M20.8333 18.7501C21.9792 18.7501 22.9167 17.8126 22.9167 16.6667V6.25008C22.9167 5.10425 21.9792 4.16675 20.8333 4.16675H4.16667C3.02083 4.16675 2.08333 5.10425 2.08333 6.25008V16.6667C2.08333 17.8126 3.02083 18.7501 4.16667 18.7501H0V20.8334H25V18.7501H20.8333ZM4.16667 6.25008H20.8333V16.6667H4.16667V6.25008Z" fill="currentColor"/>
    </svg>
  );
};

export default LaptopIcon;
