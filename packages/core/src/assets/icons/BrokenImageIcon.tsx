import React from 'react';

export interface BrokenImageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BrokenImageIcon = ({ size, ...props }: BrokenImageIconProps) => {
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
      
<path d="M21.875 5.20833V12.0729L18.75 8.9375L14.5833 13.1146L10.4167 8.94792L6.25 13.1146L3.125 9.97917V5.20833C3.125 4.0625 4.0625 3.125 5.20833 3.125H19.7917C20.9375 3.125 21.875 4.0625 21.875 5.20833ZM18.75 11.8958L21.875 15.0312V19.7917C21.875 20.9375 20.9375 21.875 19.7917 21.875H5.20833C4.0625 21.875 3.125 20.9375 3.125 19.7917V12.9375L6.25 16.0521L10.4167 11.8854L14.5833 16.0521L18.75 11.8958Z" fill="currentColor"/>
    </svg>
  );
};

export default BrokenImageIcon;
