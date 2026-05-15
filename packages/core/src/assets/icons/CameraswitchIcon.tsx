import React from 'react';

export interface CameraswitchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CameraswitchIcon = ({ size, ...props }: CameraswitchIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3235_30018)">
        <path
          d="M16.6667 7.29152H15.625L14.5833 6.24985H10.4167L9.375 7.29152H8.33333C7.1875 7.29152 6.25 8.22902 6.25 9.37485V15.6248C6.25 16.7707 7.1875 17.7082 8.33333 17.7082H16.6667C17.8125 17.7082 18.75 16.7707 18.75 15.6248V9.37485C18.75 8.22902 17.8125 7.29152 16.6667 7.29152ZM12.5 14.5832C11.3542 14.5832 10.4167 13.6457 10.4167 12.4998C10.4167 11.354 11.3542 10.4165 12.5 10.4165C13.6458 10.4165 14.5833 11.354 14.5833 12.4998C14.5833 13.6457 13.6458 14.5832 12.5 14.5832Z"
          fill="currentColor"
        />
        <path
          d="M8.92708 0.531099L13.5938 5.19777V2.12485C18.5104 2.61443 22.4271 6.5311 22.9167 11.4478H25C24.3125 3.14568 16.1354 -1.6564 8.92708 0.531099Z"
          fill="currentColor"
        />
        <path
          d="M11.4062 22.8748C6.48958 22.3853 2.57292 18.4686 2.08333 13.5519H0C0.6875 21.854 8.86458 26.6561 16.0729 24.4686L11.4062 19.8019V22.8748Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3235_30018">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CameraswitchIcon;
