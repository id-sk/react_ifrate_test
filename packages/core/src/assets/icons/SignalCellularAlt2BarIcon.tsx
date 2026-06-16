import React from 'react';

export interface SignalCellularAlt2BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularAlt2BarIcon = ({ size, ...props }: SignalCellularAlt2BarIconProps) => {
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
      
<path d="M7.8125 11.9791H10.9375V18.2291H7.8125V11.9791ZM14.0625 6.77075H17.1875V18.2291H14.0625V6.77075Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalCellularAlt2BarIcon;
