import React from 'react';

export interface CameraIndoorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CameraIndoorIcon = ({ size, ...props }: CameraIndoorIconProps) => {
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
      
<path d="M12.5001 3.125L4.16675 9.375V21.875H20.8334V9.375L12.5001 3.125ZM16.6667 16.7292L14.5834 15.625V16.6667C14.5834 17.2396 14.1147 17.7083 13.5417 17.7083H9.37508C8.80216 17.7083 8.33341 17.2396 8.33341 16.6667V12.5C8.33341 11.9271 8.80216 11.4583 9.37508 11.4583H13.5417C14.1147 11.4583 14.5834 11.9271 14.5834 12.5V13.5417L16.6667 12.4375V16.7292Z" fill="currentColor"/>
    </svg>
  );
};

export default CameraIndoorIcon;
