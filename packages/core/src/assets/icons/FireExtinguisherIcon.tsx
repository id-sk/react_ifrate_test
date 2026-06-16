import React from 'react';

export interface FireExtinguisherIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FireExtinguisherIcon = ({ size, ...props }: FireExtinguisherIconProps) => {
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
      
<path d="M8.33333 19.2707H18.75V20.3123C18.75 21.4582 17.8125 22.3957 16.6667 22.3957H10.4167C9.27083 22.3957 8.33333 21.4582 8.33333 20.3123V19.2707ZM8.33333 18.229H18.75V13.0207H8.33333V18.229ZM18.75 2.604V8.854L15.4688 8.1665C15.4583 8.1665 15.4583 8.17692 15.4479 8.18734C17.0625 8.83317 18.2812 10.2498 18.6458 11.979H8.4375C8.79167 10.2498 10.0208 8.83317 11.6354 8.18734C11.2917 7.9165 11.0104 7.58317 10.8021 7.19775L6.25 6.24984V5.20817L10.8021 4.26025C11.3229 3.28109 12.3542 2.604 13.5417 2.604C14.2708 2.604 14.9375 2.86442 15.4688 3.2915L18.75 2.604ZM14.5833 5.729C14.5521 5.11442 14.1146 4.68734 13.5417 4.68734C12.9687 4.68734 12.5 5.15609 12.5 5.729C12.5 6.30192 12.9687 6.77067 13.5417 6.77067C14.1146 6.77067 14.5833 6.30192 14.5833 5.729Z" fill="currentColor"/>
    </svg>
  );
};

export default FireExtinguisherIcon;
