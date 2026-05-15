import React from 'react';

export interface HideImageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HideImageIcon = ({ size, ...props }: HideImageIconProps) => {
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
        d="M22.6146 4.46875C22.6146 3.32292 21.6771 2.38542 20.5313 2.38542H6.8125L22.6146 18.1875V4.46875Z"
        fill="currentColor"
      />
      <path
        d="M3.66667 2.1875L2.1875 3.65625L3.86458 5.33333V19.0521C3.86458 20.1979 4.80208 21.1354 5.94792 21.1354H19.6667L21.3438 22.8125L22.8125 21.3438L3.66667 2.1875ZM6.98958 16.9688L10.1146 12.8021L12.4583 15.9271L13.3125 14.7813L15.5 16.9688H6.98958Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HideImageIcon;
