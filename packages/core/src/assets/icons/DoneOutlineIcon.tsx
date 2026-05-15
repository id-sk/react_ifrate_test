import React from 'react';

export interface DoneOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoneOutlineIcon = ({ size, ...props }: DoneOutlineIconProps) => {
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
        d="M20.5938 5.13542L22.0521 6.59375L8.78125 19.8646L2.94792 14.0313L4.40625 12.5729L8.78125 16.9479L20.5938 5.13542ZM20.5938 2.1875L8.78125 14L4.40625 9.625L0 14.0313L8.78125 22.8125L25 6.59375L20.5938 2.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoneOutlineIcon;
