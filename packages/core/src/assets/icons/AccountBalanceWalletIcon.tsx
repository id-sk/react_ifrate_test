import React from 'react';

export interface AccountBalanceWalletIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccountBalanceWalletIcon = ({ size, ...props }: AccountBalanceWalletIconProps) => {
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
      
<path d="M21.3542 18.75V19.7917C21.3542 20.9375 20.4167 21.875 19.2709 21.875H4.68758C3.53133 21.875 2.60425 20.9375 2.60425 19.7917V5.20833C2.60425 4.0625 3.53133 3.125 4.68758 3.125H19.2709C20.4167 3.125 21.3542 4.0625 21.3542 5.20833V6.25H11.9792C10.823 6.25 9.89591 7.1875 9.89591 8.33333V16.6667C9.89591 17.8125 10.823 18.75 11.9792 18.75H21.3542ZM11.9792 16.6667H22.3959V8.33333H11.9792V16.6667ZM16.1459 14.0625C15.2813 14.0625 14.5834 13.3646 14.5834 12.5C14.5834 11.6354 15.2813 10.9375 16.1459 10.9375C17.0105 10.9375 17.7084 11.6354 17.7084 12.5C17.7084 13.3646 17.0105 14.0625 16.1459 14.0625Z" fill="currentColor"/>
    </svg>
  );
};

export default AccountBalanceWalletIcon;
