import React from 'react';

export interface UmbrellaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UmbrellaIcon = ({ size, ...props }: UmbrellaIconProps) => {
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
        d="M15.1042 7.72917L13.5417 6.53125V4.0625C13.5417 3.79167 13.7708 3.5625 14.0625 3.5625C14.3542 3.5625 14.5833 3.78125 14.5833 4.0625V4.6875H16.6667V4.0625C16.6667 2.67708 15.5 1.5625 14.0625 1.5625C12.625 1.5625 11.4583 2.67708 11.4583 4.0625V6.53125L9.89583 7.72917L6.25 6.84375L11.5104 22.7292C11.6667 23.1979 12.0833 23.4375 12.5 23.4375C12.9167 23.4375 13.3333 23.1979 13.4896 22.7187L18.75 6.84375L15.1042 7.72917ZM13.8333 9.375L14.625 9.97917L15.5833 9.73958L13.5417 15.9375V9.15625L13.8333 9.375ZM10.375 9.98958L11.1667 9.38542L11.4583 9.15625V15.9375L9.40625 9.75L10.375 9.98958Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UmbrellaIcon;
