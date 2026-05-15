import React from 'react';

export interface NearMeDisabledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NearMeDisabledIcon = ({ size, ...props }: NearMeDisabledIconProps) => {
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
        d="M11.7604 7.34375L21.1354 3.86458L17.6563 13.2396L11.7604 7.34375ZM22.8125 21.3438L3.65625 2.1875L2.1875 3.66667L7.46875 8.94792L2.38542 10.8333V12.3021L9.75 15.25L12.6979 22.6146H14.1667L16.0521 17.5313L21.3333 22.8125L22.8125 21.3438Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NearMeDisabledIcon;
