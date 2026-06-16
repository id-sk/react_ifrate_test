import React from 'react';

export interface SignalWifiStatusbar4BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalWifiStatusbar4BarIcon = ({ size, ...props }: SignalWifiStatusbar4BarIconProps) => {
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
      
<path d="M12.5 3.64575C7.61458 3.64575 3.19792 5.62492 0 8.83325L12.5 21.3541L25 8.83325C21.8021 5.62492 17.3854 3.64575 12.5 3.64575Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalWifiStatusbar4BarIcon;
