import React from 'react';

export interface MessageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MessageIcon = ({ size, ...props }: MessageIconProps) => {
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
      
<path d="M20.8334 2.08325H4.16671C3.02087 2.08325 2.09379 3.02075 2.09379 4.16659L2.08337 22.9166L6.25004 18.7499H20.8334C21.9792 18.7499 22.9167 17.8124 22.9167 16.6666V4.16659C22.9167 3.02075 21.9792 2.08325 20.8334 2.08325ZM18.75 14.5833H6.25004V12.4999H18.75V14.5833ZM18.75 11.4583H6.25004V9.37492H18.75V11.4583ZM18.75 8.33325H6.25004V6.24992H18.75V8.33325Z" fill="currentColor"/>
    </svg>
  );
};

export default MessageIcon;
