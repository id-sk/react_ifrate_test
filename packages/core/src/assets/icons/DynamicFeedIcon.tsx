import React from 'react';

export interface DynamicFeedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DynamicFeedIcon = ({ size, ...props }: DynamicFeedIconProps) => {
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
        d="M8.33337 8.33333H6.25004V15.625C6.25004 16.7708 7.18754 17.7083 8.33337 17.7083H17.7084V15.625H8.33337V8.33333Z"
        fill="currentColor"
      />
      <path
        d="M20.8334 3.125H12.5C11.3542 3.125 10.4167 4.0625 10.4167 5.20833V11.4583C10.4167 12.6042 11.3542 13.5417 12.5 13.5417H20.8334C21.9792 13.5417 22.9167 12.6042 22.9167 11.4583V5.20833C22.9167 4.0625 21.9792 3.125 20.8334 3.125ZM20.8334 11.4583H12.5V7.29167H20.8334V11.4583Z"
        fill="currentColor"
      />
      <path
        d="M4.16671 12.5H2.08337V19.7917C2.08337 20.9375 3.02087 21.875 4.16671 21.875H13.5417V19.7917H4.16671V12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DynamicFeedIcon;
