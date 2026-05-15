import React from 'react';

export interface StarOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StarOutlineIcon = ({ size, ...props }: StarOutlineIconProps) => {
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
        d="M22.9166 10.1457L15.427 9.49984L12.4999 2.604L9.57284 9.51025L2.08325 10.1457L7.77075 15.0728L6.06242 22.3957L12.4999 18.5103L18.9374 22.3957L17.2395 15.0728L22.9166 10.1457ZM12.4999 16.5623L8.58325 18.9269L9.62492 14.4686L6.16659 11.4686L10.7291 11.0728L12.4999 6.87484L14.2812 11.0832L18.8437 11.479L15.3853 14.479L16.427 18.9373L12.4999 16.5623Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StarOutlineIcon;
