import React from 'react';

export interface ChatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChatIcon = ({ size, ...props }: ChatIconProps) => {
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
        d="M20.8333 2.08325H4.16659C3.02075 2.08325 2.09367 3.02075 2.09367 4.16659L2.08325 22.9166L6.24992 18.7499H20.8333C21.9791 18.7499 22.9166 17.8124 22.9166 16.6666V4.16659C22.9166 3.02075 21.9791 2.08325 20.8333 2.08325ZM6.24992 9.37492H18.7499V11.4583H6.24992V9.37492ZM14.5833 14.5833H6.24992V12.4999H14.5833V14.5833ZM18.7499 8.33325H6.24992V6.24992H18.7499V8.33325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChatIcon;
