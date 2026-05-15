import React from 'react';

export interface CompressIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CompressIcon = ({ size, ...props }: CompressIconProps) => {
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
        d="M8.33341 20.3125H11.4584V23.4375H13.5417V20.3125H16.6667L12.5001 16.1458L8.33341 20.3125ZM16.6667 4.6875H13.5417V1.5625H11.4584V4.6875H8.33341L12.5001 8.85417L16.6667 4.6875ZM4.16675 9.89583V11.9792H20.8334V9.89583H4.16675Z"
        fill="currentColor"
      />
      <path d="M4.16675 13.0208H20.8334V15.1042H4.16675V13.0208Z" fill="currentColor" />
    </svg>
  );
};

export default CompressIcon;
