import React from 'react';

export interface TodayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TodayIcon = ({ size, ...props }: TodayIconProps) => {
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
        d="M19.7917 4.16671H18.75V2.08337H16.6667V4.16671H8.33333V2.08337H6.25V4.16671H5.20833C4.05208 4.16671 3.13542 5.10421 3.13542 6.25004L3.125 20.8334C3.125 21.9792 4.05208 22.9167 5.20833 22.9167H19.7917C20.9375 22.9167 21.875 21.9792 21.875 20.8334V6.25004C21.875 5.10421 20.9375 4.16671 19.7917 4.16671ZM19.7917 20.8334H5.20833V9.37504H19.7917V20.8334ZM7.29167 11.4584H12.5V16.6667H7.29167V11.4584Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TodayIcon;
