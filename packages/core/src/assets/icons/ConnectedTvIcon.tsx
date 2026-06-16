import React from 'react';

export interface ConnectedTvIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ConnectedTvIcon = ({ size, ...props }: ConnectedTvIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V17.7083C1.04175 18.8542 1.97925 19.7917 3.12508 19.7917H8.33341V21.875H16.6667V19.7917H21.8751C23.0209 19.7917 23.948 18.8542 23.948 17.7083L23.9584 5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125ZM21.8751 17.7083H3.12508V5.20833H21.8751V17.7083ZM4.16675 14.5833V16.6667H6.25008C6.25008 15.5104 5.323 14.5833 4.16675 14.5833ZM4.16675 11.4583V12.9479C6.21883 12.9479 7.8855 14.6146 7.8855 16.6667H9.37508C9.37508 13.7917 7.04175 11.4583 4.16675 11.4583ZM4.16675 8.33333V9.84375C7.92716 9.84375 10.9897 12.8958 10.9897 16.6667H12.5001C12.5001 12.0625 8.7605 8.33333 4.16675 8.33333Z" fill="currentColor"/>
    </svg>
  );
};

export default ConnectedTvIcon;
