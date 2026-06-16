import React from 'react';

export interface PermContactCalendarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PermContactCalendarIcon = ({ size, ...props }: PermContactCalendarIconProps) => {
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
      
<path d="M19.7917 4.16671H18.75V2.08337H16.6667V4.16671H8.33333V2.08337H6.25V4.16671H5.20833C4.05208 4.16671 3.125 5.10421 3.125 6.25004V20.8334C3.125 21.9792 4.05208 22.9167 5.20833 22.9167H19.7917C20.9375 22.9167 21.875 21.9792 21.875 20.8334V6.25004C21.875 5.10421 20.9375 4.16671 19.7917 4.16671ZM12.5 7.29171C14.2292 7.29171 15.625 8.68754 15.625 10.4167C15.625 12.1459 14.2292 13.5417 12.5 13.5417C10.7708 13.5417 9.375 12.1459 9.375 10.4167C9.375 8.68754 10.7708 7.29171 12.5 7.29171ZM18.75 19.7917H6.25V18.75C6.25 16.6667 10.4167 15.5209 12.5 15.5209C14.5833 15.5209 18.75 16.6667 18.75 18.75V19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default PermContactCalendarIcon;
