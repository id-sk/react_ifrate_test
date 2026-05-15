import React from 'react';

export interface GradingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GradingIcon = ({ size, ...props }: GradingIconProps) => {
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
        d="M4.16675 7.29167H20.8334V9.375H4.16675V7.29167ZM4.16675 13.5417H20.8334V11.4583H4.16675V13.5417ZM4.16675 17.7083H11.4584V15.625H4.16675V17.7083ZM4.16675 21.875H11.4584V19.7917H4.16675V21.875ZM16.0522 18.9271L14.5834 17.4479L13.1147 18.9167L16.0522 21.875L20.8334 17.1042L19.3542 15.625L16.0522 18.9271ZM4.16675 3.125V5.20833H20.8334V3.125H4.16675Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GradingIcon;
