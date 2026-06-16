import React from 'react';

export interface EventBusyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EventBusyIcon = ({ size, ...props }: EventBusyIconProps) => {
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
      
<path d="M9.69792 18.7502L12.2396 16.2085L14.7812 18.7502L15.8854 17.646L13.3438 15.1043L15.8854 12.5627L14.7812 11.4585L12.2396 14.0002L9.69792 11.4585L8.59375 12.5627L11.1354 15.1043L8.59375 17.646L9.69792 18.7502ZM19.7917 4.16683H18.75V2.0835H16.6667V4.16683H8.33333V2.0835H6.25V4.16683H5.20833C4.05208 4.16683 3.13542 5.10433 3.13542 6.25016L3.125 20.8335C3.125 21.9793 4.05208 22.9168 5.20833 22.9168H19.7917C20.9375 22.9168 21.875 21.9793 21.875 20.8335V6.25016C21.875 5.10433 20.9375 4.16683 19.7917 4.16683ZM19.7917 20.8335H5.20833V9.37516H19.7917V20.8335Z" fill="currentColor"/>
    </svg>
  );
};

export default EventBusyIcon;
