import React from 'react';

export interface KeyboardDoubleArrowUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardDoubleArrowUpIcon = ({ size, ...props }: KeyboardDoubleArrowUpIconProps) => {
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
        d="M6.25 18.3228L7.71875 19.7916L12.5 15.0208L17.2812 19.7916L18.75 18.3228L12.5 12.0728L6.25 18.3228Z"
        fill="currentColor"
      />
      <path
        d="M6.25 11.4583L7.71875 12.927L12.5 8.15617L17.2812 12.927L18.75 11.4583L12.5 5.20825L6.25 11.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardDoubleArrowUpIcon;
