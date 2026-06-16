import React from 'react';

export interface AutorenewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AutorenewIcon = ({ size, ...props }: AutorenewIconProps) => {
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
      
<path d="M12.5001 6.25002V9.37502L16.6667 5.20835L12.5001 1.04169V4.16669C7.89591 4.16669 4.16675 7.89585 4.16675 12.5C4.16675 14.1354 4.64591 15.6563 5.45841 16.9375L6.97925 15.4167C6.5105 14.5521 6.25008 13.5521 6.25008 12.5C6.25008 9.0521 9.05216 6.25002 12.5001 6.25002ZM19.5417 8.06252L18.0209 9.58335C18.4792 10.4584 18.7501 11.4479 18.7501 12.5C18.7501 15.9479 15.948 18.75 12.5001 18.75V15.625L8.33341 19.7917L12.5001 23.9584V20.8334C17.1042 20.8334 20.8334 17.1042 20.8334 12.5C20.8334 10.8646 20.3542 9.34377 19.5417 8.06252Z" fill="currentColor"/>
    </svg>
  );
};

export default AutorenewIcon;
