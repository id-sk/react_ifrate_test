import React from 'react';

export interface LightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LightIcon = ({ size, ...props }: LightIconProps) => {
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
      
<path d="M13.5417 6.3125V3.125H11.4583V6.3125C6.77083 6.83333 3.125 10.8021 3.125 15.6146C3.125 16.7708 4.0625 17.7083 5.21875 17.7083H8.33333C8.33333 20.0104 10.1979 21.875 12.5 21.875C14.8021 21.875 16.6667 20.0104 16.6667 17.7083H19.7812C20.9375 17.7083 21.875 16.7708 21.875 15.6146C21.875 10.8021 18.2292 6.83333 13.5417 6.3125ZM5.20833 15.625C5.20833 11.6042 8.47917 8.33333 12.5 8.33333C16.5208 8.33333 19.7917 11.6042 19.7917 15.625H5.20833Z" fill="currentColor"/>
    </svg>
  );
};

export default LightIcon;
