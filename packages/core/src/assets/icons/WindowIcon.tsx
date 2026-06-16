import React from 'react';

export interface WindowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WindowIcon = ({ size, ...props }: WindowIconProps) => {
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
      
<path d="M11.4583 11.4583V3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V11.4583H11.4583ZM13.5417 11.4583H21.875V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125H13.5417V11.4583ZM11.4583 13.5417H3.125V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H11.4583V13.5417ZM13.5417 13.5417V21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V13.5417H13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default WindowIcon;
