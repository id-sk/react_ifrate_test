import React from 'react';

export interface ElectricBoltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ElectricBoltIcon = ({ size, ...props }: ElectricBoltIconProps) => {
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
      
<path d="M15.3021 2.30223L4.51042 11.9689C3.84375 12.5731 4.21875 13.6877 5.11458 13.771L13.5417 14.5835L8.48958 21.6252C8.26042 21.9481 8.29167 22.396 8.57292 22.6772C8.88542 22.9897 9.375 23.0002 9.69792 22.6981L20.4896 13.0314C21.1563 12.4272 20.7813 11.3126 19.8854 11.2293L11.4583 10.4168L16.5104 3.37515C16.7396 3.05223 16.7083 2.60432 16.4271 2.32307C16.1146 2.01057 15.625 2.00015 15.3021 2.30223Z" fill="currentColor"/>
    </svg>
  );
};

export default ElectricBoltIcon;
