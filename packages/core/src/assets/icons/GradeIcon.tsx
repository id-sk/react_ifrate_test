import React from 'react';

export interface GradeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GradeIcon = ({ size, ...props }: GradeIconProps) => {
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
      
<path d="M12.4999 18.5104L18.9374 22.3959L17.2291 15.0729L22.9166 10.1459L15.427 9.51044L12.4999 2.60419L9.57284 9.51044L2.08325 10.1459L7.77075 15.0729L6.06242 22.3959L12.4999 18.5104Z" fill="currentColor"/>
    </svg>
  );
};

export default GradeIcon;
