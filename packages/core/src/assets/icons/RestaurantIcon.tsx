import React from 'react';

export interface RestaurantIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RestaurantIcon = ({ size, ...props }: RestaurantIconProps) => {
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
      
<path d="M11.4583 9.37516H9.375V2.0835H7.29167V9.37516H5.20833V2.0835H3.125V9.37516C3.125 11.5835 4.85417 13.3752 7.03125 13.5106V22.9168H9.63542V13.5106C11.8125 13.3752 13.5417 11.5835 13.5417 9.37516V2.0835H11.4583V9.37516ZM16.6667 6.25016V14.5835H19.2708V22.9168H21.875V2.0835C19 2.0835 16.6667 4.41683 16.6667 6.25016Z" fill="currentColor"/>
    </svg>
  );
};

export default RestaurantIcon;
