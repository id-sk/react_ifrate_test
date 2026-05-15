import React from 'react';

export interface BlindsClosedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BlindsClosedIcon = ({ size, ...props }: BlindsClosedIconProps) => {
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
        d="M20.8333 18.88V2.21338H4.16659V18.88H2.08325V20.9634H13.802C13.802 21.9738 14.6145 22.7863 15.6249 22.7863C16.6353 22.7863 17.4478 21.9738 17.4478 20.9634H22.9166V18.88H20.8333ZM18.7499 10.5467H16.6666V8.46338H18.7499V10.5467ZM14.5833 10.5467H6.24992V8.46338H14.5833V10.5467ZM14.5833 12.63V14.7134H6.24992V12.63H14.5833ZM16.6666 12.63H18.7499V14.7134H16.6666V12.63ZM18.7499 6.38005H16.6666V4.29671H18.7499V6.38005ZM14.5833 4.29671V6.38005H6.24992V4.29671H14.5833ZM6.24992 18.88V16.7967H14.5833V18.88H6.24992ZM16.6666 18.88V16.7967H18.7499V18.88H16.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BlindsClosedIcon;
