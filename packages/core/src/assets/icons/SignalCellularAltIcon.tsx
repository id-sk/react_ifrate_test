import React from 'react';

export interface SignalCellularAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularAltIcon = ({ size, ...props }: SignalCellularAltIconProps) => {
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
      
<path d="M17.1875 4.16675H20.3125V20.8334H17.1875V4.16675ZM4.6875 14.5834H7.8125V20.8334H4.6875V14.5834ZM10.9375 9.37508H14.0625V20.8334H10.9375V9.37508Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalCellularAltIcon;
