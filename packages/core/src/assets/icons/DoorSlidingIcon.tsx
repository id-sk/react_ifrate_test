import React from 'react';

export interface DoorSlidingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoorSlidingIcon = ({ size, ...props }: DoorSlidingIconProps) => {
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
      
<path d="M20.8333 19.7917V5.20833C20.8333 4.0625 19.8958 3.125 18.75 3.125H13.2812V19.7917H11.7188V3.125H6.25C5.10417 3.125 4.16667 4.0625 4.16667 5.20833V19.7917H3.125V21.875H21.875V19.7917H20.8333ZM10.4167 13.5417H8.33333V11.4583H10.4167V13.5417ZM16.6667 13.5417H14.5833V11.4583H16.6667V13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default DoorSlidingIcon;
