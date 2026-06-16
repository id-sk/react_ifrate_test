import React from 'react';

export interface NoSimIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoSimIcon = ({ size, ...props }: NoSimIconProps) => {
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
      
<path d="M20.0416 4.36458C20.0416 3.21875 19.1145 2.28125 17.9687 2.28125H10.677L8.2395 4.71875L20.052 16.5312L20.0416 4.36458ZM4.06242 3.19792L2.7395 4.52083L5.46867 7.25V18.9479C5.46867 20.0938 6.40617 21.0312 7.552 21.0312H17.9791C18.3437 21.0312 18.677 20.9271 18.9791 20.7604L20.9374 22.7188L22.2603 21.3958L4.06242 3.19792Z" fill="currentColor"/>
    </svg>
  );
};

export default NoSimIcon;
