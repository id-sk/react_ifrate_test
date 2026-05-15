import React from 'react';

export interface WifiIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WifiIcon = ({ size, ...props }: WifiIconProps) => {
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
        d="M1.04175 9.14209L3.12508 11.2254C8.30216 6.04834 16.698 6.04834 21.8751 11.2254L23.9584 9.14209C17.6355 2.81917 7.37508 2.81917 1.04175 9.14209ZM9.37508 17.4754L12.5001 20.6004L15.6251 17.4754C13.9063 15.7463 11.1042 15.7463 9.37508 17.4754ZM5.20841 13.3088L7.29175 15.3921C10.1667 12.5171 14.8334 12.5171 17.7084 15.3921L19.7917 13.3088C15.7709 9.28792 9.23966 9.28792 5.20841 13.3088Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WifiIcon;
