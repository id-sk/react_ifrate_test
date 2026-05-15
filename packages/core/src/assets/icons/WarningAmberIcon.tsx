import React from 'react';

export interface WarningAmberIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WarningAmberIcon = ({ size, ...props }: WarningAmberIconProps) => {
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
        d="M12.5001 6.76038L20.3438 20.3125H4.65633L12.5001 6.76038ZM12.5001 2.60413L1.04175 22.3958H23.9584L12.5001 2.60413Z"
        fill="currentColor"
      />
      <path d="M13.5417 17.1875H11.4584V19.2708H13.5417V17.1875Z" fill="currentColor" />
      <path d="M13.5417 10.9375H11.4584V16.1458H13.5417V10.9375Z" fill="currentColor" />
    </svg>
  );
};

export default WarningAmberIcon;
