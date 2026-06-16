import React from 'react';

export interface BorderAllIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BorderAllIcon = ({ size, ...props }: BorderAllIconProps) => {
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
      
<path d="M3.125 3.125V21.875H21.875V3.125H3.125ZM11.4583 19.7917H5.20833V13.5417H11.4583V19.7917ZM11.4583 11.4583H5.20833V5.20833H11.4583V11.4583ZM19.7917 19.7917H13.5417V13.5417H19.7917V19.7917ZM19.7917 11.4583H13.5417V5.20833H19.7917V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default BorderAllIcon;
