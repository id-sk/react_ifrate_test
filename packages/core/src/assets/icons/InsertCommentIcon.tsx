import React from 'react';

export interface InsertCommentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertCommentIcon = ({ size, ...props }: InsertCommentIconProps) => {
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
        d="M20.8333 2.08325H4.16659C3.02075 2.08325 2.08325 3.02075 2.08325 4.16659V16.6666C2.08325 17.8124 3.02075 18.7499 4.16659 18.7499H18.7499L22.9166 22.9166V4.16659C22.9166 3.02075 21.9791 2.08325 20.8333 2.08325ZM18.7499 14.5833H6.24992V12.4999H18.7499V14.5833ZM18.7499 11.4583H6.24992V9.37492H18.7499V11.4583ZM18.7499 8.33325H6.24992V6.24992H18.7499V8.33325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InsertCommentIcon;
