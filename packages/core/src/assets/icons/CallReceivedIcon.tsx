import React from 'react';

export interface CallReceivedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CallReceivedIcon = ({ size, ...props }: CallReceivedIconProps) => {
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
        d="M20.3125 6.15625L18.8438 4.6875L6.77083 16.7604V9.89583H4.6875V20.3125H15.1042V18.2292H8.23958L20.3125 6.15625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CallReceivedIcon;
