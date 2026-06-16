import React from 'react';

export interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowLeftIcon = ({ size, ...props }: ArrowLeftIconProps) => {
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
      
<path d="M15.1041 7.2915L9.89575 12.4998L15.1041 17.7082V7.2915Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowLeftIcon;
