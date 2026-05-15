import React from 'react';

export interface DensityLargeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DensityLargeIcon = ({ size, ...props }: DensityLargeIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.875 3.125H3.125V5.20833H21.875V3.125Z" fill="currentColor" />
      <path d="M21.875 19.7917H3.125V21.875H21.875V19.7917Z" fill="currentColor" />
    </svg>
  );
};

export default DensityLargeIcon;
