import React from 'react';

export interface KeyboardCapslockIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardCapslockIcon = ({ size, ...props }: KeyboardCapslockIconProps) => {
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
        d="M12.5 8.97388L17.2812 13.7551L18.75 12.2864L12.5 6.03638L6.25 12.2864L7.71875 13.7551L12.5 8.97388ZM6.25 18.9635H18.75V16.8801H6.25V18.9635Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardCapslockIcon;
