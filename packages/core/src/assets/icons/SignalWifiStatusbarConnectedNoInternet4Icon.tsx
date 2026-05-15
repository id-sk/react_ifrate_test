import React from 'react';

export interface SignalWifiStatusbarConnectedNoInternet4IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalWifiStatusbarConnectedNoInternet4Icon = ({
  size,
  ...props
}: SignalWifiStatusbarConnectedNoInternet4IconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.0625 3.64575C8.17708 3.64575 3.76042 5.62492 0.5625 8.83325L13.0625 21.3541L18.2708 16.1353V7.81242H24.4375C21.3646 5.21867 17.3958 3.64575 13.0625 3.64575Z"
        fill="currentColor"
      />
      <path d="M22.4375 18.2291H20.3542V20.3124H22.4375V18.2291Z" fill="currentColor" />
      <path d="M22.4375 9.89575H20.3542V16.1458H22.4375V9.89575Z" fill="currentColor" />
    </svg>
  );
};

export default SignalWifiStatusbarConnectedNoInternet4Icon;
