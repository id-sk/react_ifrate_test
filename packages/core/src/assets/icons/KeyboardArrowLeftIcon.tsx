import React from 'react';

export interface KeyboardArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowLeftIcon = ({ size, ...props }: KeyboardArrowLeftIconProps) => {
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
        d="M16.3594 17.2812L11.5885 12.5L16.3594 7.71875L14.8906 6.25L8.64062 12.5L14.8906 18.75L16.3594 17.2812Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardArrowLeftIcon;
