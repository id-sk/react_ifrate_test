import React from 'react';

export interface TourIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TourIcon = ({ size, ...props }: TourIconProps) => {
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
        d="M20.8334 4.16671H6.25008V2.08337H4.16675V22.9167H6.25008V14.5834H20.8334L18.7501 9.37504L20.8334 4.16671ZM14.5834 9.37504C14.5834 10.5209 13.6459 11.4584 12.5001 11.4584C11.3542 11.4584 10.4167 10.5209 10.4167 9.37504C10.4167 8.22921 11.3542 7.29171 12.5001 7.29171C13.6459 7.29171 14.5834 8.22921 14.5834 9.37504Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TourIcon;
