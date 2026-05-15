import React from 'react';

export interface ArrowDropUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowDropUpIcon = ({ size, ...props }: ArrowDropUpIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.29175 15.1043L12.5001 9.896L17.7084 15.1043H7.29175Z" fill="currentColor" />
    </svg>
  );
};

export default ArrowDropUpIcon;
