import React from 'react';

export interface ScannerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScannerIcon = ({ size, ...props }: ScannerIconProps) => {
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
        d="M20.625 10.625L4.375 4.6875L3.64583 6.66667L18.3333 11.9792H5.20833C4.0625 11.9792 3.125 12.9167 3.125 14.0625V18.2292C3.125 19.375 4.0625 20.3125 5.20833 20.3125H19.7917C20.9375 20.3125 21.875 19.375 21.875 18.2292V12.5C21.875 11.6667 21.3542 10.8333 20.625 10.625ZM7.29167 17.1875H5.20833V15.1042H7.29167V17.1875ZM19.7917 17.1875H9.375V15.1042H19.7917V17.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ScannerIcon;
