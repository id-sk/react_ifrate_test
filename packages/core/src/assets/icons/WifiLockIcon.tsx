import React from 'react';

export interface WifiLockIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WifiLockIcon = ({ size, ...props }: WifiLockIconProps) => {
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
        d="M22.8958 10.9374L25 8.83325C21.8021 5.62492 17.3854 3.64575 12.5 3.64575C7.61458 3.64575 3.19792 5.62492 0 8.83325L12.5 21.3541L15.6771 18.177V15.1041C15.6771 14.6353 15.7708 14.1874 15.9167 13.7603C16.4792 12.1249 18.0104 10.9374 19.8437 10.9374H22.8958Z"
        fill="currentColor"
      />
      <path
        d="M22.9167 16.1458V15.1041C22.9167 13.9583 21.9792 13.0208 20.8333 13.0208C19.6875 13.0208 18.75 13.9583 18.75 15.1041V16.1458C18.1771 16.1458 17.7083 16.6145 17.7083 17.1874V20.3124C17.7083 20.8853 18.1771 21.3541 18.75 21.3541H22.9167C23.4896 21.3541 23.9583 20.8853 23.9583 20.3124V17.1874C23.9583 16.6145 23.4896 16.1458 22.9167 16.1458ZM21.875 16.1458H19.7917V15.1041C19.7917 14.5312 20.2604 14.0624 20.8333 14.0624C21.4062 14.0624 21.875 14.5312 21.875 15.1041V16.1458Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WifiLockIcon;
