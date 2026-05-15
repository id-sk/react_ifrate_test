import React from 'react';

export interface HexagonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HexagonIcon = ({ size, ...props }: HexagonIconProps) => {
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
        d="M17.9167 3.125H7.08342L1.66675 12.5L7.08342 21.875H17.9167L23.3334 12.5L17.9167 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HexagonIcon;
