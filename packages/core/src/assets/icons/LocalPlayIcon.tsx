import React from 'react';

export interface LocalPlayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalPlayIcon = ({ size, ...props }: LocalPlayIconProps) => {
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
      
<path d="M20.8334 12.4998C20.8334 11.354 21.7709 10.4165 22.9167 10.4165V6.24984C22.9167 5.104 21.9792 4.1665 20.8334 4.1665H4.16671C3.02087 4.1665 2.09379 5.104 2.09379 6.24984V10.4165C3.23962 10.4165 4.16671 11.354 4.16671 12.4998C4.16671 13.6457 3.23962 14.5832 2.08337 14.5832V18.7498C2.08337 19.8957 3.02087 20.8332 4.16671 20.8332H20.8334C21.9792 20.8332 22.9167 19.8957 22.9167 18.7498V14.5832C21.7709 14.5832 20.8334 13.6457 20.8334 12.4998ZM16.2292 17.4998L12.5 15.104L8.77087 17.4998L9.89587 13.2082L6.46879 10.4061L10.8855 10.1457L12.5 6.0415L14.1042 10.1561L18.5209 10.4165L15.0938 13.2186L16.2292 17.4998Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalPlayIcon;
