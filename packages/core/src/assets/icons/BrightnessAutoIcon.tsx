import React from 'react';

export interface BrightnessAutoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BrightnessAutoIcon = ({ size, ...props }: BrightnessAutoIconProps) => {
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
        d="M11.3021 13.1771H13.6979L12.5 9.375L11.3021 13.1771ZM20.8333 9.05208V4.16667H15.9479L12.5 0.71875L9.05208 4.16667H4.16667V9.05208L0.71875 12.5L4.16667 15.9479V20.8333H9.05208L12.5 24.2812L15.9479 20.8333H20.8333V15.9479L24.2812 12.5L20.8333 9.05208ZM14.8958 16.6667L14.1667 14.5833H10.8333L10.1042 16.6667H8.125L11.4583 7.29167H13.5417L16.875 16.6667H14.8958Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrightnessAutoIcon;
