import React from 'react';

export interface KeyboardArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowRightIcon = ({ size, ...props }: KeyboardArrowRightIconProps) => {
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
        d="M8.64062 17.2812L13.4115 12.5L8.64062 7.71875L10.1094 6.25L16.3594 12.5L10.1094 18.75L8.64062 17.2812Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardArrowRightIcon;
