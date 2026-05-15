import React from 'react';

export interface PrintIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PrintIcon = ({ size, ...props }: PrintIconProps) => {
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
        d="M19.7916 8.33333H5.20825C3.47909 8.33333 2.08325 9.72917 2.08325 11.4583V17.7083H6.24992V21.875H18.7499V17.7083H22.9166V11.4583C22.9166 9.72917 21.5208 8.33333 19.7916 8.33333ZM16.6666 19.7917H8.33325V14.5833H16.6666V19.7917ZM19.7916 12.5C19.2187 12.5 18.7499 12.0312 18.7499 11.4583C18.7499 10.8854 19.2187 10.4167 19.7916 10.4167C20.3645 10.4167 20.8333 10.8854 20.8333 11.4583C20.8333 12.0312 20.3645 12.5 19.7916 12.5ZM18.7499 3.125H6.24992V7.29167H18.7499V3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PrintIcon;
