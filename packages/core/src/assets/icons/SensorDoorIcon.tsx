import React from 'react';

export interface SensorDoorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SensorDoorIcon = ({ size, ...props }: SensorDoorIconProps) => {
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
        d="M18.7501 2.0835H6.25008C5.10425 2.0835 4.16675 3.021 4.16675 4.16683V22.9168H20.8334V4.16683C20.8334 3.021 19.8959 2.0835 18.7501 2.0835ZM16.1459 14.0627C15.2813 14.0627 14.5834 13.3647 14.5834 12.5002C14.5834 11.6356 15.2813 10.9377 16.1459 10.9377C17.0105 10.9377 17.7084 11.6356 17.7084 12.5002C17.7084 13.3647 17.0105 14.0627 16.1459 14.0627Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SensorDoorIcon;
