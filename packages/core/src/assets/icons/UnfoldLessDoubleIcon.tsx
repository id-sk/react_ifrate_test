import React from 'react';

export interface UnfoldLessDoubleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnfoldLessDoubleIcon = ({ size, ...props }: UnfoldLessDoubleIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3230_40027)">
        <path
          d="M17.2708 1.46875L15.7917 0L12.4896 3.30208L9.1875 0L7.71875 1.46875L12.4896 6.25L17.2708 1.46875Z"
          fill="currentColor"
        />
        <path
          d="M17.2708 6.67708L15.7917 5.20833L12.4896 8.51042L9.1875 5.20833L7.71875 6.67708L12.4896 11.4583L17.2708 6.67708Z"
          fill="currentColor"
        />
        <path
          d="M7.72917 18.3229L9.20833 19.7917L12.5104 16.4896L15.8125 19.7917L17.2812 18.3229L12.5104 13.5417L7.72917 18.3229Z"
          fill="currentColor"
        />
        <path
          d="M7.72917 23.5312L9.20833 25L12.5104 21.6979L15.8125 25L17.2812 23.5312L12.5104 18.75L7.72917 23.5312Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3230_40027">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UnfoldLessDoubleIcon;
