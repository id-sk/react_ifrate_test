import React from 'react';

export interface ReplyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReplyIcon = ({ size, ...props }: ReplyIconProps) => {
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
        d="M10.4167 8.85417V4.6875L3.125 11.9792L10.4167 19.2708V15C15.625 15 19.2708 16.6667 21.875 20.3125C20.8333 15.1042 17.7083 9.89583 10.4167 8.85417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ReplyIcon;
