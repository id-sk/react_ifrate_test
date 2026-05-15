import React from 'react';

export interface ArrowCircleUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowCircleUpIcon = ({ size, ...props }: ArrowCircleUpIconProps) => {
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
        d="M12.4999 20.8333C7.90617 20.8333 4.16659 17.0937 4.16659 12.5C4.16659 7.90623 7.90617 4.16665 12.4999 4.16665C17.0937 4.16665 20.8333 7.90623 20.8333 12.5C20.8333 17.0937 17.0937 20.8333 12.4999 20.8333ZM12.4999 22.9166C18.2499 22.9166 22.9166 18.25 22.9166 12.5C22.9166 6.74998 18.2499 2.08331 12.4999 2.08331C6.74992 2.08331 2.08325 6.74998 2.08325 12.5C2.08325 18.25 6.74992 22.9166 12.4999 22.9166ZM11.4583 12.5V16.6666H13.5416V12.5H16.6666L12.4999 8.33331L8.33325 12.5H11.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowCircleUpIcon;
