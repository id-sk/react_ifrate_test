import React from 'react';

export interface Wifi1BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Wifi1BarIcon = ({ size, ...props }: Wifi1BarIconProps) => {
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
      
<path d="M16.1772 11.4166L12.5001 15.1041L8.823 11.4166C9.7605 10.4791 11.0626 9.89575 12.5001 9.89575C13.9376 9.89575 15.2397 10.4791 16.1772 11.4166Z" fill="currentColor"/>
    </svg>
  );
};

export default Wifi1BarIcon;
