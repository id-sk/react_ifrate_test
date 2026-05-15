import React from 'react';

export interface NordicWalkingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NordicWalkingIcon = ({ size, ...props }: NordicWalkingIconProps) => {
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
        d="M20.3125 23.6981H18.75V14.3231H20.3125V23.6981ZM8.36458 14.3231H6.77083L4.6875 23.6981H6.28125L8.36458 14.3231ZM14.5833 5.46891C15.7292 5.46891 16.6667 4.53141 16.6667 3.38558C16.6667 2.23975 15.7292 1.30225 14.5833 1.30225C13.4375 1.30225 12.5 2.23975 12.5 3.38558C12.5 4.53141 13.4375 5.46891 14.5833 5.46891ZM10.7292 9.01058L7.8125 23.6981H10L11.875 15.3647L14.0625 17.4481V23.6981H16.1458V15.8856L13.9583 13.8022L14.5833 10.6772C15.9375 12.2397 18.0208 13.2814 20.3125 13.2814V11.1981C18.3333 11.1981 16.6667 10.1564 15.8333 8.69808L14.7917 7.03141C14.2083 6.10433 13.0417 5.72933 12.0312 6.15641L6.77083 8.38558V13.2814H8.85417V9.73975L10.7292 9.01058Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NordicWalkingIcon;
