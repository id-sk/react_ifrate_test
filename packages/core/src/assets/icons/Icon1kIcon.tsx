import React from 'react';

export interface Icon1kIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon1kIcon = ({ size, ...props }: Icon1kIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM10.9375 15.625H9.375V10.9375H7.8125V9.375H10.9375V15.625ZM18.2292 15.625H16.4062L14.5833 13.2812V15.625H13.0208V9.375H14.5833V11.7188L16.4062 9.375H18.2292L15.8854 12.5L18.2292 15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default Icon1kIcon;
