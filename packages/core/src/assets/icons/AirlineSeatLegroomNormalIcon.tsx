import React from 'react';

export interface AirlineSeatLegroomNormalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirlineSeatLegroomNormalIcon = ({ size, ...props }: AirlineSeatLegroomNormalIconProps) => {
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
      
<path d="M4.68758 12.5V3.125H2.60425V12.5C2.60425 15.375 4.93758 17.7083 7.81258 17.7083H14.0626V15.625H7.81258C6.08341 15.625 4.68758 14.2292 4.68758 12.5ZM20.8334 18.75H19.2709V11.4583C19.2709 10.3125 18.3334 9.375 17.1876 9.375H11.9792V3.125H5.72925V11.4583C5.72925 13.1771 7.1355 14.5833 8.85425 14.5833H16.1459V21.875H20.8334C21.698 21.875 22.3959 21.1771 22.3959 20.3125C22.3959 19.4479 21.698 18.75 20.8334 18.75Z" fill="currentColor"/>
    </svg>
  );
};

export default AirlineSeatLegroomNormalIcon;
