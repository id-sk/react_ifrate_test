import React from 'react';

export interface NetworkWifi2BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NetworkWifi2BarIcon = ({ size, ...props }: NetworkWifi2BarIconProps) => {
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
        d="M12.5 3.64575C7.61458 3.64575 3.19792 5.62492 0 8.83325L12.5 21.3541L25 8.83325C21.8021 5.62492 17.3854 3.64575 12.5 3.64575ZM17.4792 13.4166C16.0417 12.4999 14.3333 11.9791 12.5 11.9791C10.6667 11.9791 8.95833 12.4999 7.52083 13.4166L3.04167 8.93742C5.73958 6.85409 9.03125 5.72909 12.5 5.72909C15.9687 5.72909 19.2604 6.85409 21.9583 8.927L17.4792 13.4166Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NetworkWifi2BarIcon;
