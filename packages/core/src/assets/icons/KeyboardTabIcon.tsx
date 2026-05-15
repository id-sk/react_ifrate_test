import React from 'react';

export interface KeyboardTabIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardTabIcon = ({ size, ...props }: KeyboardTabIconProps) => {
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
        d="M12.5938 7.71875L16.3229 11.4583H1.5625V13.5417H16.3229L12.5833 17.2812L14.0625 18.75L20.3125 12.5L14.0625 6.25L12.5938 7.71875ZM21.3542 6.25V18.75H23.4375V6.25H21.3542Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardTabIcon;
