import React from 'react';

export interface HdrStrongIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HdrStrongIcon = ({ size, ...props }: HdrStrongIconProps) => {
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
        d="M17.7083 6.25C14.2604 6.25 11.4583 9.05208 11.4583 12.5C11.4583 15.9479 14.2604 18.75 17.7083 18.75C21.1562 18.75 23.9583 15.9479 23.9583 12.5C23.9583 9.05208 21.1562 6.25 17.7083 6.25ZM5.20829 8.33333C2.90621 8.33333 1.04163 10.1979 1.04163 12.5C1.04163 14.8021 2.90621 16.6667 5.20829 16.6667C7.51038 16.6667 9.37496 14.8021 9.37496 12.5C9.37496 10.1979 7.51038 8.33333 5.20829 8.33333ZM5.20829 14.5833C4.06246 14.5833 3.12496 13.6458 3.12496 12.5C3.12496 11.3542 4.06246 10.4167 5.20829 10.4167C6.35413 10.4167 7.29163 11.3542 7.29163 12.5C7.29163 13.6458 6.35413 14.5833 5.20829 14.5833Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HdrStrongIcon;
