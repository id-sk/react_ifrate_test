import React from 'react';

export interface DeviceHubIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DeviceHubIcon = ({ size, ...props }: DeviceHubIconProps) => {
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
        d="M17.7083 16.6667L13.5417 12.5V9.1875C14.75 8.75 15.625 7.60417 15.625 6.25C15.625 4.52083 14.2292 3.125 12.5 3.125C10.7708 3.125 9.375 4.52083 9.375 6.25C9.375 7.60417 10.25 8.75 11.4583 9.1875V12.5L7.29167 16.6667H3.125V21.875H8.33333V18.6979L12.5 14.3229L16.6667 18.6979V21.875H21.875V16.6667H17.7083Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DeviceHubIcon;
