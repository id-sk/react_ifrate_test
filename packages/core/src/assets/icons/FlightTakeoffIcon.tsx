import React from 'react';

export interface FlightTakeoffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlightTakeoffIcon = ({ size, ...props }: FlightTakeoffIconProps) => {
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
        d="M2.625 19.4948H22.4167V21.5781H2.625V19.4948ZM23.0104 9.74479C22.7917 8.91146 21.9271 8.41146 21.0938 8.64062L15.5625 10.1198L8.375 3.42188L6.36458 3.95312L10.6771 11.4219L5.5 12.8073L3.44792 11.2031L1.9375 11.6094L4.63542 16.2865C4.63542 16.2865 12.0521 14.3073 21.8958 11.6719C22.7396 11.4323 23.2292 10.5781 23.0104 9.74479Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlightTakeoffIcon;
