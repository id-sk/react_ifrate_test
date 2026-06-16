import React from 'react';

export interface StayCurrentLandscapeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StayCurrentLandscapeIcon = ({ size, ...props }: StayCurrentLandscapeIconProps) => {
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
      
<path d="M1.05216 7.29159L1.04175 17.7083C1.04175 18.8541 1.97925 19.7916 3.12508 19.7916H21.8751C23.0209 19.7916 23.9584 18.8541 23.9584 17.7083V7.29159C23.9584 6.14575 23.0209 5.20825 21.8751 5.20825H3.12508C1.97925 5.20825 1.05216 6.14575 1.05216 7.29159ZM19.7917 7.29159V17.7083H5.20841V7.29159H19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default StayCurrentLandscapeIcon;
