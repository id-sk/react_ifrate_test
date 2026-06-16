import React from 'react';

export interface Icon1kPlusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon1kPlusIcon = ({ size, ...props }: Icon1kPlusIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM9.375 15.625H7.8125V10.9375H6.25V9.375H9.375V15.625ZM14.3229 15.625L12.5 13.2812V15.625H10.9375V9.375H12.5V11.7188L14.3229 9.375H16.1458L13.8021 12.5L16.1458 15.625H14.3229ZM20.3125 13.0208H18.75V14.5833H17.7083V13.0208H16.1458V11.9792H17.7083V10.4167H18.75V11.9792H20.3125V13.0208Z" fill="currentColor"/>
    </svg>
  );
};

export default Icon1kPlusIcon;
