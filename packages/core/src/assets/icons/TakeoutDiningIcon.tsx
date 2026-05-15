import React from 'react';

export interface TakeoutDiningIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TakeoutDiningIcon = ({ size, ...props }: TakeoutDiningIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.47909 11.4582H19.5208L18.8228 20.8332H6.177L5.47909 11.4582ZM9.39575 4.1665H15.5937L19.7916 7.68734L21.4478 6.03109L22.9166 7.51025L20.0103 10.4165H4.9895L2.08325 7.51025L3.552 6.0415L5.20825 7.68734L9.39575 4.1665Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TakeoutDiningIcon;
