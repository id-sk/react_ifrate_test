import React from 'react';

export interface AirlineSeatReclineNormalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirlineSeatReclineNormalIcon = ({ size, ...props }: AirlineSeatReclineNormalIconProps) => {
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
        d="M7.90633 5.8986C7.09383 5.0861 7.09383 3.76318 7.90633 2.95068C8.71883 2.13818 10.0417 2.13818 10.8542 2.95068C11.6667 3.76318 11.6667 5.0861 10.8542 5.8986C10.0313 6.72152 8.71883 6.72152 7.90633 5.8986ZM6.25008 16.9298V7.55485H4.16675V16.9298C4.16675 19.8048 6.50008 22.1382 9.37508 22.1382H15.6251V20.0548H9.37508C7.64591 20.0548 6.25008 18.659 6.25008 16.9298ZM20.8334 21.1694L15.5522 15.8882H11.9792V12.0548C13.4376 13.2528 15.7292 14.3048 17.7084 14.3048V12.0548C15.9792 12.0757 13.948 11.1486 12.8438 9.92985L11.3855 8.31527C11.1876 8.09652 10.9376 7.91943 10.6667 7.79443C10.3647 7.6486 10.0209 7.55485 9.66675 7.55485H9.6355C8.34383 7.55485 7.29175 8.60693 7.29175 9.8986V15.8882C7.29175 17.6173 8.68758 19.0132 10.4167 19.0132H15.698L19.3438 22.659L20.8334 21.1694Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AirlineSeatReclineNormalIcon;
