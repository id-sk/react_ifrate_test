import React from 'react';

export interface CoffeeMakerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CoffeeMakerIcon = ({ size, ...props }: CoffeeMakerIconProps) => {
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
      
<path d="M18.7501 6.25016V4.16683H20.8334V2.0835H6.25008C5.10425 2.0835 4.16675 3.021 4.16675 4.16683V20.8335C4.16675 21.9793 5.10425 22.9168 6.25008 22.9168H20.8334V20.8335H16.6355C17.9167 19.8856 18.7501 18.3752 18.7501 16.6668V11.4585H8.33341V16.6668C8.33341 18.3752 9.17716 19.8856 10.448 20.8335H6.25008V4.16683H8.33341V6.25016C8.33341 6.82308 8.80216 7.29183 9.37508 7.29183H17.7084C18.2813 7.29183 18.7501 6.82308 18.7501 6.25016Z" fill="currentColor"/>
<path d="M13.5417 10.4168C14.117 10.4168 14.5834 9.95046 14.5834 9.37516C14.5834 8.79987 14.117 8.3335 13.5417 8.3335C12.9665 8.3335 12.5001 8.79987 12.5001 9.37516C12.5001 9.95046 12.9665 10.4168 13.5417 10.4168Z" fill="currentColor"/>
    </svg>
  );
};

export default CoffeeMakerIcon;
