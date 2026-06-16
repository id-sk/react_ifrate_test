import React from 'react';

export interface SignalCellularConnectedNoInternet4BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularConnectedNoInternet4BarIcon = ({ size, ...props }: SignalCellularConnectedNoInternet4BarIconProps) => {
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
      
<path d="M20.8333 18.7499H22.9166V10.4166H20.8333V18.7499ZM20.8333 22.9166H22.9166V20.8333H20.8333V22.9166ZM2.08325 22.9166H18.7499V8.33325H22.9166V2.08325L2.08325 22.9166Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalCellularConnectedNoInternet4BarIcon;
