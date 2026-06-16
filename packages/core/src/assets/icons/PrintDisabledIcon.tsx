import React from 'react';

export interface PrintDisabledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PrintDisabledIcon = ({ size, ...props }: PrintDisabledIconProps) => {
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
      
<path d="M20.8333 16.7708H23.8542V10.5208C23.8542 8.75 22.5 7.39583 20.7292 7.39583H11.3542L20.8333 16.7708ZM20.7292 9.47917C21.3021 9.47917 21.7708 9.94792 21.7708 10.5208C21.7708 11.0937 21.3021 11.5625 20.7292 11.5625C20.1562 11.5625 19.6875 11.0937 19.6875 10.5208C19.6875 9.94792 20.1562 9.47917 20.7292 9.47917ZM19.6875 6.35417V2.1875H7.1875V3.33333L10.3125 6.35417H19.6875ZM2.1875 0.9375L0.9375 2.1875L6.04167 7.39583C4.375 7.5 3.02083 8.85417 3.02083 10.5208V16.7708H7.1875V20.9375H19.5833L22.7083 24.0625L24.0625 22.7083L2.1875 0.9375ZM9.27083 18.8542V13.6458H12.2917L17.5 18.8542H9.27083Z" fill="currentColor"/>
    </svg>
  );
};

export default PrintDisabledIcon;
