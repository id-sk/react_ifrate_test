import React from 'react';

export interface HlsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HlsIcon = ({ size, ...props }: HlsIconProps) => {
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
      
<path d="M7.03121 9.375H8.59371V15.625H7.03121V13.0208H4.94788V15.625H3.38538V9.375H4.94788V11.4583H7.03121V9.375ZM17.4479 15.625H20.5729C21.1458 15.625 21.6145 15.1562 21.6145 14.5833V13.0208C21.6145 12.4479 21.1458 11.9792 20.5729 11.9792H17.9687V10.9375H20.052V11.4583H21.6145V10.4167C21.6145 9.84375 21.1458 9.375 20.5729 9.375H17.4479C16.875 9.375 16.4062 9.84375 16.4062 10.4167V11.9792C16.4062 12.5521 16.875 13.0208 17.4479 13.0208H20.052V14.0625H17.9687V13.5417H16.4062V14.5833C16.4062 15.1562 16.875 15.625 17.4479 15.625ZM14.8437 15.625V14.0625H12.2395V9.375H10.677V15.625H14.8437Z" fill="currentColor"/>
    </svg>
  );
};

export default HlsIcon;
