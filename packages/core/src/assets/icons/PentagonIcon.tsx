import React from 'react';

export interface PentagonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PentagonIcon = ({ size, ...props }: PentagonIconProps) => {
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
        d="M2.08325 9.89591L6.24992 22.3959H18.7499L22.9166 9.89591L12.4999 2.60425L2.08325 9.89591Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PentagonIcon;
