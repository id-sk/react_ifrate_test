import React from 'react';

export interface DirectionsRailwayFilledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionsRailwayFilledIcon = ({ size, ...props }: DirectionsRailwayFilledIconProps) => {
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
        d="M12.5001 2.604C8.33341 2.604 4.16675 3.12484 4.16675 6.77067V16.6665C4.16675 18.6769 5.80216 20.3123 7.81258 20.3123L6.25008 21.354V22.3957H18.7501V21.354L17.1876 20.3123C19.198 20.3123 20.8334 18.6769 20.8334 16.6665V6.77067C20.8334 3.12484 17.1042 2.604 12.5001 2.604ZM12.5001 17.1873C11.6355 17.1873 10.9376 16.4894 10.9376 15.6248C10.9376 14.7603 11.6355 14.0623 12.5001 14.0623C13.3647 14.0623 14.0626 14.7603 14.0626 15.6248C14.0626 16.4894 13.3647 17.1873 12.5001 17.1873ZM18.7501 10.9373H6.25008V7.81234H18.7501V10.9373Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DirectionsRailwayFilledIcon;
