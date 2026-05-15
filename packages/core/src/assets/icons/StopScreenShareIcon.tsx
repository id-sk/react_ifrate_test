import React from 'react';

export interface StopScreenShareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StopScreenShareIcon = ({ size, ...props }: StopScreenShareIconProps) => {
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
        d="M22.1042 18.5312L24.1875 20.6146H25V18.5312H22.1042ZM22.9062 16.4479L22.9167 6.03125C22.9167 4.875 21.9792 3.94792 20.8333 3.94792H7.52083L12.9687 9.39583C13.1562 9.35417 13.3437 9.32292 13.5417 9.29167V7.07292L17.7083 10.9583L16.0625 12.4896L21.8333 18.2604C22.4687 17.9167 22.9062 17.2292 22.9062 16.4479ZM2.48958 1.5625L1.15625 2.88542L2.76042 4.48958C2.34375 4.86458 2.08333 5.41667 2.08333 6.03125V16.4479C2.08333 17.5938 3.01042 18.5312 4.16667 18.5312H0V20.6146H18.8854L21.7083 23.4375L23.0312 22.1146L2.48958 1.5625ZM7.29167 15.4062C7.61458 13.8646 8.25 12.3333 9.44792 11.1771L11.1042 12.8333C9.5 13.2292 8.29167 14.0625 7.29167 15.4062Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StopScreenShareIcon;
