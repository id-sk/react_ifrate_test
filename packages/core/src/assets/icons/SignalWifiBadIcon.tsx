import React from 'react';

export interface SignalWifiBadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalWifiBadIcon = ({ size, ...props }: SignalWifiBadIconProps) => {
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
      
<path d="M25 8.83325C21.8021 5.62492 17.3854 3.64575 12.5 3.64575C7.61458 3.64575 3.19792 5.62492 0 8.83325L12.5 21.3541V11.9791H21.8646L25 8.83325ZM20.4062 14.0624L18.2292 16.2395L16.0521 14.0624L14.5833 15.5312L16.7604 17.7083L14.5833 19.8853L16.0521 21.3541L18.2292 19.1874L20.4062 21.3541L21.875 19.8853L19.7083 17.7083L21.875 15.5312L20.4062 14.0624Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalWifiBadIcon;
