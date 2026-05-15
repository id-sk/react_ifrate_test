import React from 'react';

export interface QueueIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const QueueIcon = ({ size, ...props }: QueueIconProps) => {
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
        d="M4.16659 6.25004H2.08325V20.8334C2.08325 21.9792 3.02075 22.9167 4.16659 22.9167H18.7499V20.8334H4.16659V6.25004ZM20.8333 2.08337H8.33325C7.18742 2.08337 6.24992 3.02087 6.24992 4.16671V16.6667C6.24992 17.8125 7.18742 18.75 8.33325 18.75H20.8333C21.9791 18.75 22.9166 17.8125 22.9166 16.6667V4.16671C22.9166 3.02087 21.9791 2.08337 20.8333 2.08337ZM19.7916 11.4584H15.6249V15.625H13.5416V11.4584H9.37492V9.37504H13.5416V5.20837H15.6249V9.37504H19.7916V11.4584Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QueueIcon;
