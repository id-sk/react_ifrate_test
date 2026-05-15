import React from 'react';

export interface AsteriskIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AsteriskIcon = ({ size, ...props }: AsteriskIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 8 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.92 7.008L0.96 6.312L2.328 4.056L0 3.096L0.36 1.992L2.808 2.592L3.024 0H4.2L4.416 2.568L6.888 1.992L7.248 3.096L4.92 4.056L6.264 6.312L5.328 7.008L3.624 4.944L1.92 7.008Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AsteriskIcon;
