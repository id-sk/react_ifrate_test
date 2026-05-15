import React from 'react';

export interface FlagIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlagIcon = ({ size, ...props }: FlagIconProps) => {
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
        d="M14.4792 5.72909L14.0625 3.64575H4.6875V21.3541H6.77083V14.0624H12.6042L13.0208 16.1458H20.3125V5.72909H14.4792Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlagIcon;
