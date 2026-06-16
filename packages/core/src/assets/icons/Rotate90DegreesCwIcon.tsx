import React from 'react';

export interface Rotate90DegreesCwIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Rotate90DegreesCwIcon = ({ size, ...props }: Rotate90DegreesCwIconProps) => {
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
      
<path d="M4.3125 20.6969C7.46875 23.8532 12.3021 24.2803 15.9271 21.999L14.4062 20.4782C11.6354 21.9678 8.11458 21.5511 5.78125 19.2178C2.9375 16.374 2.9375 11.749 5.78125 8.90527C7.20833 7.48861 9.07292 6.80111 10.9375 6.80111V9.89486L15.1042 5.72819L10.9375 1.56152V4.69694C8.54167 4.69694 6.13542 5.60319 4.3125 7.43652C0.645833 11.0928 0.645833 17.0303 4.3125 20.6969ZM10.9375 14.0615L17.1875 20.3115L23.4375 14.0615L17.1875 7.81152L10.9375 14.0615Z" fill="currentColor"/>
    </svg>
  );
};

export default Rotate90DegreesCwIcon;
