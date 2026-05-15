import React from 'react';

export interface Brightness1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Brightness1Icon = ({ size, ...props }: Brightness1IconProps) => {
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
        d="M12.4999 22.9168C18.2529 22.9168 22.9166 18.2531 22.9166 12.5002C22.9166 6.7472 18.2529 2.0835 12.4999 2.0835C6.74695 2.0835 2.08325 6.7472 2.08325 12.5002C2.08325 18.2531 6.74695 22.9168 12.4999 22.9168Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Brightness1Icon;
