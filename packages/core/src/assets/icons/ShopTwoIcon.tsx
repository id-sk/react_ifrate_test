import React from 'react';

export interface ShopTwoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShopTwoIcon = ({ size, ...props }: ShopTwoIconProps) => {
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
      
<path d="M3.12508 9.89583H1.04175V21.3542C1.04175 22.5104 1.96883 23.4375 3.12508 23.4375H17.7084C18.8647 23.4375 19.7917 22.5104 19.7917 21.3542H3.12508V9.89583ZM18.7501 5.72917V3.64583C18.7501 2.48958 17.823 1.5625 16.6667 1.5625H12.5001C11.3438 1.5625 10.4167 2.48958 10.4167 3.64583V5.72917H5.20841V17.1875C5.20841 18.3438 6.1355 19.2708 7.29175 19.2708H21.8751C23.0313 19.2708 23.9584 18.3438 23.9584 17.1875V5.72917H18.7501ZM12.5001 3.64583H16.6667V5.72917H12.5001V3.64583ZM12.5001 16.1458V8.85417L18.2292 11.9792L12.5001 16.1458Z" fill="currentColor"/>
    </svg>
  );
};

export default ShopTwoIcon;
