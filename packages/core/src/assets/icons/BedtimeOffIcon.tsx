import React from 'react';

export interface BedtimeOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BedtimeOffIcon = ({ size, ...props }: BedtimeOffIconProps) => {
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
      
<path d="M22.8125 21.7478L3.66667 2.60193L2.1875 4.07068L4.55208 6.43527C3.45833 8.09152 2.82292 10.0603 2.82292 12.1748C2.82292 17.9248 7.48958 22.5915 13.2396 22.5915C15.3646 22.5915 17.3333 21.9457 18.9792 20.8623L21.3438 23.2269L22.8125 21.7478Z" fill="currentColor"/>
<path d="M13.5938 1.77902C11.3229 1.7061 9.22917 2.35193 7.5 3.48735L12.2813 8.2686C12 6.13318 12.3854 3.87277 13.5938 1.77902Z" fill="currentColor"/>
    </svg>
  );
};

export default BedtimeOffIcon;
