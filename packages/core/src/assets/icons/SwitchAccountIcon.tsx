import React from 'react';

export interface SwitchAccountIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchAccountIcon = ({ size, ...props }: SwitchAccountIconProps) => {
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
        d="M4.16671 6.25016H2.08337V20.8335C2.08337 21.9793 3.02087 22.9168 4.16671 22.9168H18.75V20.8335H4.16671V6.25016ZM20.8334 2.0835H8.33337C7.18754 2.0835 6.25004 3.021 6.25004 4.16683V16.6668C6.25004 17.8127 7.18754 18.7502 8.33337 18.7502H20.8334C21.9792 18.7502 22.9167 17.8127 22.9167 16.6668V4.16683C22.9167 3.021 21.9792 2.0835 20.8334 2.0835ZM14.5834 4.16683C16.3125 4.16683 17.7084 5.56266 17.7084 7.29183C17.7084 9.021 16.3125 10.4168 14.5834 10.4168C12.8542 10.4168 11.4584 9.021 11.4584 7.29183C11.4584 5.56266 12.8542 4.16683 14.5834 4.16683ZM20.8334 16.6668H8.33337V15.1043C8.33337 13.0314 12.5 11.9793 14.5834 11.9793C16.6667 11.9793 20.8334 13.0314 20.8334 15.1043V16.6668Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwitchAccountIcon;
