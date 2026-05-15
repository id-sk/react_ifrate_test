import React from 'react';

export interface CommentBankIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CommentBankIcon = ({ size, ...props }: CommentBankIconProps) => {
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
        d="M20.8334 2.08331H4.16671C3.02087 2.08331 2.08337 3.02081 2.08337 4.16665V22.9166L6.25004 18.75H20.8334C21.9792 18.75 22.9167 17.8125 22.9167 16.6666V4.16665C22.9167 3.02081 21.9792 2.08331 20.8334 2.08331ZM19.7917 13.5416L17.1875 11.9791L14.5834 13.5416V5.20831H19.7917V13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CommentBankIcon;
