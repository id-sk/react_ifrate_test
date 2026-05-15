import React from 'react';

export interface KeyboardDoubleArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardDoubleArrowRightIcon = ({ size, ...props }: KeyboardDoubleArrowRightIconProps) => {
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
        d="M6.677 6.25L5.20825 7.71875L9.97908 12.5L5.20825 17.2812L6.677 18.75L12.927 12.5L6.677 6.25Z"
        fill="currentColor"
      />
      <path
        d="M13.5416 6.25L12.0728 7.71875L16.8437 12.5L12.0728 17.2812L13.5416 18.75L19.7916 12.5L13.5416 6.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardDoubleArrowRightIcon;
