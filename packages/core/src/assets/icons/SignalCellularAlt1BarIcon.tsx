import React from 'react';

export interface SignalCellularAlt1BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularAlt1BarIcon = ({ size, ...props }: SignalCellularAlt1BarIconProps) => {
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
      
<path d="M10.9375 9.375H14.0625V15.625H10.9375V9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalCellularAlt1BarIcon;
