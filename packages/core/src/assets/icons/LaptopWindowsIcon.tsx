import React from 'react';

export interface LaptopWindowsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LaptopWindowsIcon = ({ size, ...props }: LaptopWindowsIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.8333 19.2708V18.2291C21.9792 18.2291 22.9062 17.2916 22.9062 16.1458L22.9167 5.72909C22.9167 4.58325 21.9792 3.64575 20.8333 3.64575H4.16667C3.02083 3.64575 2.08333 4.58325 2.08333 5.72909V16.1458C2.08333 17.2916 3.02083 18.2291 4.16667 18.2291V19.2708H0V21.3541H25V19.2708H20.8333ZM4.16667 5.72909H20.8333V16.1458H4.16667V5.72909Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LaptopWindowsIcon;
