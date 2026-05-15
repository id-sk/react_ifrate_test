import React from 'react';

export interface SourceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SourceIcon = ({ size, ...props }: SourceIconProps) => {
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
        d="M20.8333 6.24996H12.4999L10.4166 4.16663H4.16659C3.02075 4.16663 2.09367 5.10413 2.09367 6.24996L2.08325 18.75C2.08325 19.8958 3.02075 20.8333 4.16659 20.8333H20.8333C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V8.33329C22.9166 7.18746 21.9791 6.24996 20.8333 6.24996ZM14.5833 16.6666H6.24992V14.5833H14.5833V16.6666ZM18.7499 12.5H6.24992V10.4166H18.7499V12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SourceIcon;
