import React from 'react';

export interface PauseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PauseIcon = ({ size, ...props }: PauseIconProps) => {
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
      
<path d="M6.25 19.7917H10.4167V5.20837H6.25V19.7917ZM14.5833 5.20837V19.7917H18.75V5.20837H14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default PauseIcon;
