import React from 'react';

export interface IncompleteCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const IncompleteCircleIcon = ({ size, ...props }: IncompleteCircleIconProps) => {
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
        d="M22.9166 12.5002C22.9166 18.2502 18.2499 22.9168 12.4999 22.9168C6.74992 22.9168 2.08325 18.2502 2.08325 12.5002C2.08325 9.62516 3.24992 7.021 5.13534 5.13558L12.4999 12.5002V2.0835C18.2499 2.0835 22.9166 6.75016 22.9166 12.5002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IncompleteCircleIcon;
