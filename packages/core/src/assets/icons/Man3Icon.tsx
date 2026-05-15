import React from 'react';

export interface Man3IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Man3Icon = ({ size, ...props }: Man3IconProps) => {
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
        d="M14.5833 7.42099H10.4166C9.27075 7.42099 8.33325 8.35849 8.33325 9.50432V15.7543H10.4166V23.046H14.5833V15.7543H16.6666V9.50432C16.6666 8.35849 15.7291 7.42099 14.5833 7.42099Z"
        fill="currentColor"
      />
      <path
        d="M14.8421 4.29588L12.4998 1.95361L10.1575 4.29588L12.4998 6.63815L14.8421 4.29588Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Man3Icon;
