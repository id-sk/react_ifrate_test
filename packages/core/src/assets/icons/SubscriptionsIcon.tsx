import React from 'react';

export interface SubscriptionsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SubscriptionsIcon = ({ size, ...props }: SubscriptionsIconProps) => {
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
        d="M20.8333 8.33337H4.16659V6.25004H20.8333V8.33337ZM18.7499 2.08337H6.24992V4.16671H18.7499V2.08337ZM22.9166 12.5V20.8334C22.9166 21.9792 21.9791 22.9167 20.8333 22.9167H4.16659C3.02075 22.9167 2.08325 21.9792 2.08325 20.8334V12.5C2.08325 11.3542 3.02075 10.4167 4.16659 10.4167H20.8333C21.9791 10.4167 22.9166 11.3542 22.9166 12.5ZM16.6666 16.6667L10.4166 13.2605V20.0625L16.6666 16.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SubscriptionsIcon;
