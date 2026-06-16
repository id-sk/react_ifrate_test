import React from 'react';

export interface SpaceBarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SpaceBarIcon = ({ size, ...props }: SpaceBarIconProps) => {
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
      
<path d="M18.7501 9.375V13.5417H6.25008V9.375H4.16675V15.625H20.8334V9.375H18.7501Z" fill="currentColor"/>
    </svg>
  );
};

export default SpaceBarIcon;
