import React from 'react';

export interface VolcanoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VolcanoIcon = ({ size, ...props }: VolcanoIconProps) => {
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
        d="M18.7499 8.85417H11.4583L9.37492 14.0625H6.24992L2.08325 23.4375H22.9166L18.7499 8.85417Z"
        fill="currentColor"
      />
      <path d="M15.6249 1.5625H13.5416V5.72917H15.6249V1.5625Z" fill="currentColor" />
      <path
        d="M19.7391 3.27072L16.7928 6.21697L18.266 7.6901L21.2122 4.74385L19.7391 3.27072Z"
        fill="currentColor"
      />
      <path
        d="M9.43106 3.26677L7.95793 4.7399L10.9042 7.68615L12.3773 6.21302L9.43106 3.26677Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VolcanoIcon;
