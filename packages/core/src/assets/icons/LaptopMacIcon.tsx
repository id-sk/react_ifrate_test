import React from 'react';

export interface LaptopMacIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LaptopMacIcon = ({ size, ...props }: LaptopMacIconProps) => {
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
      
<path d="M20.8333 19.2708C21.9792 19.2708 22.9062 18.3333 22.9062 17.1874L22.9167 5.72909C22.9167 4.58325 21.9792 3.64575 20.8333 3.64575H4.16667C3.02083 3.64575 2.08333 4.58325 2.08333 5.72909V17.1874C2.08333 18.3333 3.02083 19.2708 4.16667 19.2708H0C0 20.4166 0.9375 21.3541 2.08333 21.3541H22.9167C24.0625 21.3541 25 20.4166 25 19.2708H20.8333ZM4.16667 5.72909H20.8333V17.1874H4.16667V5.72909ZM12.5 20.3124C11.9271 20.3124 11.4583 19.8437 11.4583 19.2708C11.4583 18.6978 11.9271 18.2291 12.5 18.2291C13.0729 18.2291 13.5417 18.6978 13.5417 19.2708C13.5417 19.8437 13.0729 20.3124 12.5 20.3124Z" fill="currentColor"/>
    </svg>
  );
};

export default LaptopMacIcon;
