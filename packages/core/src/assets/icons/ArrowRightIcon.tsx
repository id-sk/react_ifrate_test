import React from 'react';

export interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowRightIcon = ({ size, ...props }: ArrowRightIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.89575 17.7082L15.1041 12.4998L9.89575 7.2915V17.7082Z" fill="currentColor" />
    </svg>
  );
};

export default ArrowRightIcon;
