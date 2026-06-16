import React from 'react';

export interface FormatBoldIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatBoldIcon = ({ size, ...props }: FormatBoldIconProps) => {
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
      
<path d="M15.8595 12.2812C16.8699 11.5833 17.5782 10.4374 17.5782 9.37492C17.5782 7.02075 15.7553 5.20825 13.4115 5.20825H6.90112V19.7916H14.2345C16.4115 19.7916 18.099 18.0208 18.099 15.8437C18.099 14.2603 17.2032 12.9062 15.8595 12.2812ZM10.0261 7.81242H13.1511C14.0157 7.81242 14.7136 8.51034 14.7136 9.37492C14.7136 10.2395 14.0157 10.9374 13.1511 10.9374H10.0261V7.81242ZM13.672 17.1874H10.0261V14.0624H13.672C14.5365 14.0624 15.2345 14.7603 15.2345 15.6249C15.2345 16.4895 14.5365 17.1874 13.672 17.1874Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatBoldIcon;
