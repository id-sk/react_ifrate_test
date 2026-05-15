import React from 'react';

export interface VerticalAlignCenterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignCenterIcon = ({ size, ...props }: VerticalAlignCenterIconProps) => {
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
        d="M8.33341 19.7917H11.4584V23.9584H13.5417V19.7917H16.6667L12.5001 15.6251L8.33341 19.7917ZM16.6667 5.20841H13.5417V1.04175H11.4584V5.20841H8.33341L12.5001 9.37508L16.6667 5.20841ZM4.16675 11.4584V13.5417H20.8334V11.4584H4.16675Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VerticalAlignCenterIcon;
