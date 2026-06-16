import React from 'react';

export interface LocalPoliceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalPoliceIcon = ({ size, ...props }: LocalPoliceIconProps) => {
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
      
<path d="M12.5 1.0415L3.125 5.20817V11.4582C3.125 17.2394 7.125 22.6457 12.5 23.9582C17.875 22.6457 21.875 17.2394 21.875 11.4582V5.20817L12.5 1.0415ZM15.1042 13.1144L16.0417 17.1561L12.5 15.0207L8.95833 17.1561L9.89583 13.1248L6.77083 10.4269L10.8958 10.0728L12.5 6.27067L14.1042 10.0623L18.2292 10.4165L15.1042 13.1144Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalPoliceIcon;
