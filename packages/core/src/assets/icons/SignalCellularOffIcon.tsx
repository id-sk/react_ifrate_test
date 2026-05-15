import React from 'react';

export interface SignalCellularOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularOffIcon = ({ size, ...props }: SignalCellularOffIconProps) => {
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
        d="M22.3958 1.04175L13.4479 9.98966L22.3958 18.9376V1.04175ZM5.48958 4.68758L4.16667 6.0105L10.7917 12.6355L1.5625 21.8751H20.0312L22.1146 23.9584L23.4375 22.6355L5.48958 4.68758Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SignalCellularOffIcon;
