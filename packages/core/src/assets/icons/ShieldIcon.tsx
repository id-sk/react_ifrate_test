import React from 'react';

export interface ShieldIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShieldIcon = ({ size, ...props }: ShieldIconProps) => {
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
        d="M12.5 1.04175L3.125 5.20841V11.4584C3.125 17.2397 7.125 22.6459 12.5 23.9584C17.875 22.6459 21.875 17.2397 21.875 11.4584V5.20841L12.5 1.04175Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ShieldIcon;
