import React from 'react';

export interface SchoolIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SchoolIcon = ({ size, ...props }: SchoolIconProps) => {
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
        d="M5.20841 13.7292V17.8958L12.5001 21.875L19.7917 17.8958V13.7292L12.5001 17.7083L5.20841 13.7292ZM12.5001 3.125L1.04175 9.375L12.5001 15.625L21.8751 10.5104V17.7083H23.9584V9.375L12.5001 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SchoolIcon;
