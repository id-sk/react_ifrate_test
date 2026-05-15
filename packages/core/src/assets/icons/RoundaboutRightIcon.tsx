import React from 'react';

export interface RoundaboutRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RoundaboutRightIcon = ({ size, ...props }: RoundaboutRightIconProps) => {
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
        d="M14.4999 8.33333C13.9999 5.375 11.427 3.125 8.33325 3.125C4.88534 3.125 2.08325 5.92708 2.08325 9.375C2.08325 12.4688 4.33325 15.0417 7.29159 15.5417V21.875H9.37492V15.5312C9.37492 14.5104 8.63534 13.6562 7.63534 13.4792C5.66659 13.1562 4.16659 11.4375 4.16659 9.375C4.16659 7.07292 6.03117 5.20833 8.33325 5.20833C10.3958 5.20833 12.1145 6.70833 12.4374 8.67708C12.6145 9.67708 13.4687 10.4167 14.4895 10.4167H18.927L17.2708 12.0729L18.7499 13.5417L22.9166 9.375L18.7499 5.20833L17.2812 6.67708L18.927 8.33333H14.4999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RoundaboutRightIcon;
