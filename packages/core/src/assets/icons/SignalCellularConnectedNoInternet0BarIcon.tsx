import React from 'react';

export interface SignalCellularConnectedNoInternet0BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularConnectedNoInternet0BarIcon = ({ size, ...props }: SignalCellularConnectedNoInternet0BarIconProps) => {
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
      
<path d="M20.8333 18.7499H22.9166V10.4166H20.8333V18.7499ZM20.8333 22.9166H22.9166V20.8333H20.8333V22.9166ZM18.7499 20.8333V22.9166H2.08325L22.9166 2.08325V8.33325H20.8333V7.1145L7.1145 20.8333H18.7499Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalCellularConnectedNoInternet0BarIcon;
