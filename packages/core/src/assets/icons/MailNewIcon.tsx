import React from 'react';

export interface MailNewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MailNewIcon = ({ size, ...props }: MailNewIconProps) => {
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
        d="M14.0801 4.16699C13.9738 4.59383 13.917 5.04027 13.917 5.5C13.917 7.07419 14.5796 8.49254 15.6396 9.49512L12.5 11.458L4.16699 6.25V8.33301L12.5 13.542L17.2656 10.5625C17.9265 10.8437 18.6534 11 19.417 11C20.7468 11 21.966 10.5277 22.917 9.74219V18.75C22.917 19.8958 21.9788 20.833 20.833 20.833H4.16699C3.02116 20.833 2.08301 19.8958 2.08301 18.75L2.09375 6.25C2.09379 5.1042 3.02119 4.16699 4.16699 4.16699H14.0801Z"
        fill="currentColor"
      />
      <circle cx="19.417" cy="5.5" r="4.5" fill="currentColor" />
    </svg>
  );
};

export default MailNewIcon;
