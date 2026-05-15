import React from 'react';

export interface LteMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LteMobiledataIcon = ({ size, ...props }: LteMobiledataIconProps) => {
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
        d="M5.72909 14.5833H8.85409V16.6666H3.64575V8.33325H5.72909V14.5833ZM8.85409 10.4166H10.9374V16.6666H13.0208V10.4166H15.1041V8.33325H8.85409V10.4166ZM21.3541 10.4166V8.33325H16.1458V16.6666H21.3541V14.5833H18.2291V13.5416H21.3541V11.4583H18.2291V10.4166H21.3541Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LteMobiledataIcon;
