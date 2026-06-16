import React from 'react';

export interface Icon5kIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon5kIcon = ({ size, ...props }: Icon5kIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM11.4583 10.9375H8.33333V11.9792H10.4167C10.9896 11.9792 11.4583 12.4479 11.4583 13.0208V14.5833C11.4583 15.1562 10.9896 15.625 10.4167 15.625H6.77083V14.0625H9.89583V13.0208H6.77083V9.375H11.4583V10.9375ZM18.75 15.625H16.9271L15.1042 13.2812V15.625H13.5417V9.375H15.1042V11.7188L16.9271 9.375H18.75L16.4062 12.5L18.75 15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default Icon5kIcon;
