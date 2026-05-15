import React from 'react';

export interface ArrowDropDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowDropDownIcon = ({ size, ...props }: ArrowDropDownIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.29175 9.896L12.5001 15.1043L17.7084 9.896H7.29175Z" fill="currentColor" />
    </svg>
  );
};

export default ArrowDropDownIcon;
