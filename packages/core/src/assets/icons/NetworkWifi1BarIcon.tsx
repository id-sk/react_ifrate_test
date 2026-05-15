import React from 'react';

export interface NetworkWifi1BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NetworkWifi1BarIcon = ({ size, ...props }: NetworkWifi1BarIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 3.64575C7.61458 3.64575 3.19792 5.62492 0 8.83325L12.5 21.3541L25 8.83325C21.8021 5.62492 17.3854 3.64575 12.5 3.64575ZM15.9583 14.9374C14.9375 14.3749 13.75 14.0624 12.5 14.0624C11.25 14.0624 10.0625 14.3749 9.04167 14.9374L3.04167 8.927C5.73958 6.85409 9.03125 5.72909 12.5 5.72909C15.9687 5.72909 19.2604 6.85409 21.9583 8.927L15.9583 14.9374Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NetworkWifi1BarIcon;
