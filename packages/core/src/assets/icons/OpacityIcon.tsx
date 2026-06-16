import React from 'react';

export interface OpacityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OpacityIcon = ({ size, ...props }: OpacityIconProps) => {
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
      
<path d="M18.3959 8.32817L12.5001 2.44275L6.60425 8.32817C4.97925 9.95317 4.16675 12.1198 4.16675 14.2032C4.16675 16.2865 4.97925 18.4844 6.60425 20.1094C8.22925 21.7344 10.3647 22.5573 12.5001 22.5573C14.6355 22.5573 16.7709 21.7344 18.3959 20.1094C20.0209 18.4844 20.8334 16.2865 20.8334 14.2032C20.8334 12.1198 20.0209 9.95317 18.3959 8.32817ZM6.25008 14.5782C6.2605 12.4948 6.89591 11.1719 8.08341 9.99483L12.5001 5.48442L16.9167 10.0469C18.1042 11.2136 18.7397 12.4948 18.7501 14.5782H6.25008Z" fill="currentColor"/>
    </svg>
  );
};

export default OpacityIcon;
