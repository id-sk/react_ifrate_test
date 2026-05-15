import React from 'react';

export interface NorthIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NorthIcon = ({ size, ...props }: NorthIconProps) => {
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
        d="M5.20825 9.37516L6.677 10.8439L11.4583 6.07308V22.9168H13.5416V6.07308L18.3228 10.8543L19.7916 9.37516L12.4999 2.0835L5.20825 9.37516Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NorthIcon;
