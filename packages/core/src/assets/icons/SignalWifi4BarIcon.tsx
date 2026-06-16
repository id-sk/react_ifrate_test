import React from 'react';

export interface SignalWifi4BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalWifi4BarIcon = ({ size, ...props }: SignalWifi4BarIconProps) => {
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
      
<path d="M12.5104 22.1249L24.625 7.03117C24.1562 6.677 19.4896 2.8645 12.5 2.8645C5.5 2.8645 0.84375 6.677 0.375 7.03117L12.4896 22.1249L12.5 22.1353L12.5104 22.1249Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalWifi4BarIcon;
