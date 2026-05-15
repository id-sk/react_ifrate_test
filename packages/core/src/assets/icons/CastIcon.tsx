import React from 'react';

export interface CastIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CastIcon = ({ size, ...props }: CastIconProps) => {
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
        d="M21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V8.33333H3.12508V5.20833H21.8751V19.7917H14.5834V21.875H21.8751C23.0209 21.875 23.9584 20.9375 23.9584 19.7917V5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125ZM1.04175 18.75V21.875H4.16675C4.16675 20.1458 2.77091 18.75 1.04175 18.75ZM1.04175 14.5833V16.6667C3.91675 16.6667 6.25008 19 6.25008 21.875H8.33341C8.33341 17.8438 5.073 14.5833 1.04175 14.5833ZM1.04175 10.4167V12.5C6.21883 12.5 10.4167 16.6979 10.4167 21.875H12.5001C12.5001 15.5417 7.36466 10.4167 1.04175 10.4167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CastIcon;
