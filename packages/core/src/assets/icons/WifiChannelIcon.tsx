import React from 'react';

export interface WifiChannelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WifiChannelIcon = ({ size, ...props }: WifiChannelIconProps) => {
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
        d="M16.6667 3.125C14.0521 3.125 12.7396 8.96875 12.0833 14.1354C11.2396 11.1042 10.0104 8.33333 8.33333 8.33333C4.61458 8.33333 3.125 21.875 3.125 21.875H5.21875C5.85417 16.3854 7.30208 11.6458 8.33333 10.5521C9.35417 11.6458 10.8125 16.3958 11.4479 21.875H13.5417C14.0625 19.2396 15.625 15.625 16.6667 15.625C17.7083 15.625 19.2708 19.3021 19.7917 21.875H21.875C21.875 21.875 21.3542 3.125 16.6667 3.125ZM16.6667 13.5417C15.6354 13.5417 14.7708 14.1875 14.0625 15.1042C14.6562 10.1354 15.6667 6.125 16.6667 5.27083C17.6771 6.11458 18.6562 10.1354 19.2604 15.0937C18.5521 14.1875 17.6875 13.5417 16.6667 13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WifiChannelIcon;
