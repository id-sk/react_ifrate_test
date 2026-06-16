import React from 'react';

export interface ArrowBackIosNewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowBackIosNewIcon = ({ size, ...props }: ArrowBackIosNewIconProps) => {
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
      
<path d="M18.6303 3.92725L16.7865 2.0835L6.36987 12.5002L16.7865 22.9168L18.6303 21.0731L10.0574 12.5002L18.6303 3.92725Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowBackIosNewIcon;
