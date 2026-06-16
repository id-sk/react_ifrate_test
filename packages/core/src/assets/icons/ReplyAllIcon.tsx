import React from 'react';

export interface ReplyAllIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReplyAllIcon = ({ size, ...props }: ReplyAllIconProps) => {
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
      
<path d="M7.29167 7.8125V4.6875L0 11.9792L7.29167 19.2708V16.1458L3.125 11.9792L7.29167 7.8125ZM13.5417 8.85417V4.6875L6.25 11.9792L13.5417 19.2708V15C18.75 15 22.3958 16.6667 25 20.3125C23.9583 15.1042 20.8333 9.89583 13.5417 8.85417Z" fill="currentColor"/>
    </svg>
  );
};

export default ReplyAllIcon;
