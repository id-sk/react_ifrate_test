import React from 'react';

export interface CameraOutdoorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CameraOutdoorIcon = ({ size, ...props }: CameraOutdoorIconProps) => {
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
      
<path d="M18.7501 13.5417C18.7501 12.9688 18.2813 12.5 17.7084 12.5H13.5417C12.9688 12.5 12.5001 12.9688 12.5001 13.5417V17.7083C12.5001 18.2812 12.9688 18.75 13.5417 18.75H17.7084C18.2813 18.75 18.7501 18.2812 18.7501 17.7083V16.6667L20.8334 17.7708V13.4792L18.7501 14.5833V13.5417ZM12.5001 3.125L4.16675 9.375V21.875H20.8334V19.7917H6.25008V10.4167L12.5001 5.72917L18.7501 10.4167V11.4583H20.8334V9.375L12.5001 3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default CameraOutdoorIcon;
