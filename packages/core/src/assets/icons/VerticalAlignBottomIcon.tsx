import React from 'react';

export interface VerticalAlignBottomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignBottomIcon = ({ size, ...props }: VerticalAlignBottomIconProps) => {
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
        d="M16.6667 13.5417H13.5417V3.125H11.4584V13.5417H8.33341L12.5001 17.7083L16.6667 13.5417ZM4.16675 19.7917V21.875H20.8334V19.7917H4.16675Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VerticalAlignBottomIcon;
