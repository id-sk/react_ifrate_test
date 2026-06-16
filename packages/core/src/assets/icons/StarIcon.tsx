import React from 'react';

export interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StarIcon = ({ size, ...props }: StarIconProps) => {
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
      
<path d="M12.4999 18.5103L18.9374 22.3957L17.2291 15.0728L22.9166 10.1457L15.427 9.51025L12.4999 2.604L9.57284 9.51025L2.08325 10.1457L7.77075 15.0728L6.06242 22.3957L12.4999 18.5103Z" fill="currentColor"/>
    </svg>
  );
};

export default StarIcon;
