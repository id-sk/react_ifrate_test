import React from 'react';

export interface TitleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TitleIcon = ({ size, ...props }: TitleIconProps) => {
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
        d="M5.20837 4.6875V7.8125H10.9375V20.3125H14.0625V7.8125H19.7917V4.6875H5.20837Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TitleIcon;
