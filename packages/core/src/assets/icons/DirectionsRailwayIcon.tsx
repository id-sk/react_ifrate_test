import React from 'react';

export interface DirectionsRailwayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionsRailwayIcon = ({ size, ...props }: DirectionsRailwayIconProps) => {
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
        d="M4.16675 17.1877C4.16675 19.1981 5.80216 20.8335 7.81258 20.8335L6.25008 22.396V22.9168H18.7501V22.396L17.1876 20.8335C19.198 20.8335 20.8334 19.1981 20.8334 17.1877V6.25016C20.8334 2.60433 17.1042 2.0835 12.5001 2.0835C7.89591 2.0835 4.16675 2.60433 4.16675 6.25016V17.1877ZM12.5001 18.7502C11.3542 18.7502 10.4167 17.8127 10.4167 16.6668C10.4167 15.521 11.3542 14.5835 12.5001 14.5835C13.6459 14.5835 14.5834 15.521 14.5834 16.6668C14.5834 17.8127 13.6459 18.7502 12.5001 18.7502ZM18.7501 11.4585H6.25008V6.25016H18.7501V11.4585Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DirectionsRailwayIcon;
