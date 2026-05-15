import React from 'react';

export interface RectangleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RectangleIcon = ({ size, ...props }: RectangleIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22.9166 4.16675H2.08325V20.8334H22.9166V4.16675Z" fill="currentColor" />
    </svg>
  );
};

export default RectangleIcon;
