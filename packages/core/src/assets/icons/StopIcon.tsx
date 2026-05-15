import React from 'react';

export interface StopIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StopIcon = ({ size, ...props }: StopIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.25 6.25H18.75V18.75H6.25V6.25Z" fill="currentColor" />
    </svg>
  );
};

export default StopIcon;
