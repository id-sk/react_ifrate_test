import React from 'react';

export interface EventAvailableIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EventAvailableIcon = ({ size, ...props }: EventAvailableIconProps) => {
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
        d="M17.2188 12.5627L16.1146 11.4585L11.0312 16.5418L8.82292 14.3335L7.71875 15.4377L11.0312 18.7502L17.2188 12.5627ZM19.7917 4.16683H18.75V2.0835H16.6667V4.16683H8.33333V2.0835H6.25V4.16683H5.20833C4.05208 4.16683 3.13542 5.10433 3.13542 6.25016L3.125 20.8335C3.125 21.9793 4.05208 22.9168 5.20833 22.9168H19.7917C20.9375 22.9168 21.875 21.9793 21.875 20.8335V6.25016C21.875 5.10433 20.9375 4.16683 19.7917 4.16683ZM19.7917 20.8335H5.20833V9.37516H19.7917V20.8335Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EventAvailableIcon;
