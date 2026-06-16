import React from 'react';

export interface AccountBalanceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccountBalanceIcon = ({ size, ...props }: AccountBalanceIconProps) => {
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
      
<path d="M7.29159 10.9375H4.16659V18.2292H7.29159V10.9375Z" fill="currentColor"/>
<path d="M14.0624 10.9375H10.9374V18.2292H14.0624V10.9375Z" fill="currentColor"/>
<path d="M22.9166 20.3125H2.08325V23.4375H22.9166V20.3125Z" fill="currentColor"/>
<path d="M20.8333 10.9375H17.7083V18.2292H20.8333V10.9375Z" fill="currentColor"/>
<path d="M12.4999 1.5625L2.08325 6.77083V8.85417H22.9166V6.77083L12.4999 1.5625Z" fill="currentColor"/>
    </svg>
  );
};

export default AccountBalanceIcon;
