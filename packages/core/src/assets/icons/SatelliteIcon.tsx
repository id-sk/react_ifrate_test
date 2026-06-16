import React from 'react';

export interface SatelliteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SatelliteIcon = ({ size, ...props }: SatelliteIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM5.20833 5.19792H8.33333C8.33333 6.92708 6.9375 8.33333 5.20833 8.33333V5.19792ZM5.20833 12.5V10.4167C8.08333 10.4167 10.4167 8.07292 10.4167 5.19792H12.5C12.5 9.22917 9.23958 12.5 5.20833 12.5ZM5.20833 18.75L8.85417 14.0625L11.4583 17.1979L15.1042 12.5L19.7917 18.75H5.20833Z" fill="currentColor"/>
    </svg>
  );
};

export default SatelliteIcon;
