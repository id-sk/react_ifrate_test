import React from 'react';

export interface PhonePausedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhonePausedIcon = ({ size, ...props }: PhonePausedIconProps) => {
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
        d="M17.7083 3.125H15.625V10.4167H17.7083V3.125ZM20.8333 16.1458C19.5312 16.1458 18.2812 15.9375 17.1146 15.5521C16.75 15.4375 16.3437 15.5208 16.0521 15.8021L13.7604 18.0938C10.8125 16.5938 8.39583 14.1875 6.89583 11.2292L9.1875 8.92708C9.47917 8.65625 9.5625 8.25 9.44792 7.88542C9.0625 6.71875 8.85417 5.46875 8.85417 4.16667C8.85417 3.59375 8.38542 3.125 7.8125 3.125H4.16667C3.59375 3.125 3.125 3.59375 3.125 4.16667C3.125 13.9479 11.0521 21.875 20.8333 21.875C21.4062 21.875 21.875 21.4062 21.875 20.8333V17.1875C21.875 16.6146 21.4062 16.1458 20.8333 16.1458ZM19.7917 3.125V10.4167H21.875V3.125H19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PhonePausedIcon;
