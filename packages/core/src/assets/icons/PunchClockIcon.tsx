import React from 'react';

export interface PunchClockIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PunchClockIcon = ({ size, ...props }: PunchClockIconProps) => {
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
      
<path d="M19.7917 6.77083H18.75V1.5625H6.25V6.77083H5.20833C4.0625 6.77083 3.125 7.70833 3.125 8.85417V21.3542C3.125 22.5 4.0625 23.4375 5.20833 23.4375H19.7917C20.9375 23.4375 21.875 22.5 21.875 21.3542V8.85417C21.875 7.70833 20.9375 6.77083 19.7917 6.77083ZM8.33333 3.64583H16.6667V6.77083H8.33333V3.64583ZM12.5 20.3125C9.625 20.3125 7.29167 17.9792 7.29167 15.1042C7.29167 12.2292 9.625 9.89583 12.5 9.89583C15.375 9.89583 17.7083 12.2292 17.7083 15.1042C17.7083 17.9792 15.375 20.3125 12.5 20.3125Z" fill="currentColor"/>
<path d="M13.0208 12.5H11.9792V15.3229L13.6875 17.0312L14.4271 16.2917L13.0208 14.8854V12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default PunchClockIcon;
