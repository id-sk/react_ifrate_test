import React from 'react';

export interface TransitEnterexitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TransitEnterexitIcon = ({ size, ...props }: TransitEnterexitIconProps) => {
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
        d="M16.6667 18.75H6.25V8.33333H9.375V13.3021L16.6458 6.25L18.75 8.36458L11.6146 15.625H16.6667V18.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TransitEnterexitIcon;
