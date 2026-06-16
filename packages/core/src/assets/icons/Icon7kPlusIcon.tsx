import React from 'react';

export interface Icon7kPlusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon7kPlusIcon = ({ size, ...props }: Icon7kPlusIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM8.33333 15.625H6.51042L7.94792 10.9375H5.20833V9.375H8.85417C9.55208 9.375 10.0521 10.0521 9.85417 10.7187L8.33333 15.625ZM16.6667 15.625H14.8438L13.0208 13.2812V15.625H11.4583V9.375H13.0208V11.7188L14.8438 9.375H16.6667L14.3229 12.5L16.6667 15.625ZM20.8333 13.0208H19.2708V14.5833H18.2292V13.0208H16.6667V11.9792H18.2292V10.4167H19.2708V11.9792H20.8333V13.0208Z" fill="currentColor"/>
    </svg>
  );
};

export default Icon7kPlusIcon;
