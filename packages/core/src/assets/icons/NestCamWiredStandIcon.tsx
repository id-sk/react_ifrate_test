import React from 'react';

export interface NestCamWiredStandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NestCamWiredStandIcon = ({ size, ...props }: NestCamWiredStandIconProps) => {
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
        d="M16.4896 1.05073L12.2083 1.48823C8.82292 1.82156 6.25 4.66531 6.25 8.07156C6.25 11.4778 8.82292 14.3216 12.2083 14.6653L14.1875 14.8632L13.6042 15.7486C13.2396 15.6653 12.875 15.6236 12.5 15.6236C9.625 15.6236 7.29167 17.957 7.29167 20.832V22.9153C7.29167 23.4882 7.76042 23.957 8.33333 23.957H16.6667C17.2396 23.957 17.7083 23.4882 17.7083 22.9153V20.832C17.7083 19.0924 16.8437 17.5507 15.5312 16.6028L16.5417 15.0924C17.7292 15.1653 18.75 14.2278 18.75 13.0195V3.12364C18.75 1.90489 17.7083 0.946559 16.4896 1.05073Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NestCamWiredStandIcon;
