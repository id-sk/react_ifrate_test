import React from 'react';

export interface Icon8kIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon8kIcon = ({ size, ...props }: Icon8kIconProps) => {
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
      
<path d="M8.33333 13.0208H9.89583V14.5833H8.33333V13.0208ZM8.33333 10.4167H9.89583V11.9792H8.33333V10.4167ZM19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM11.4583 14.5833C11.4583 15.1562 10.9896 15.625 10.4167 15.625H7.8125C7.23958 15.625 6.77083 15.1562 6.77083 14.5833V10.4167C6.77083 9.84375 7.23958 9.375 7.8125 9.375H10.4167C10.9896 9.375 11.4583 9.84375 11.4583 10.4167V14.5833ZM18.75 15.625H16.9271L15.1042 13.2812V15.625H13.5417V9.375H15.1042V11.7188L16.9271 9.375H18.75L16.4062 12.5L18.75 15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default Icon8kIcon;
