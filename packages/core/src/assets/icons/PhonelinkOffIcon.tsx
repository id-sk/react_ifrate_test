import React from 'react';

export interface PhonelinkOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhonelinkOffIcon = ({ size, ...props }: PhonelinkOffIconProps) => {
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
        d="M22.9167 6.25V4.16667H7.10417L9.1875 6.25H22.9167ZM2 1.71875L0.677083 3.04167L2.57292 4.9375C2.27083 5.29167 2.08333 5.75 2.08333 6.25V17.7083H0V20.8333H18.4687L20.9167 23.2812L22.2396 21.9583L2 1.71875ZM4.16667 6.53125L15.3437 17.7083H4.16667V6.53125ZM23.9583 8.33333H17.7083C17.1354 8.33333 16.6667 8.80208 16.6667 9.375V13.7292L18.75 15.8125V10.4167H22.9167V17.7083H20.6458L23.7708 20.8333H23.9583C24.5312 20.8333 25 20.3646 25 19.7917V9.375C25 8.80208 24.5312 8.33333 23.9583 8.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PhonelinkOffIcon;
