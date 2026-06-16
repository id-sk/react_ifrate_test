import React from 'react';

export interface PortraitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PortraitIcon = ({ size, ...props }: PortraitIconProps) => {
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
      
<path d="M12.5 12.7604C13.7917 12.7604 14.8438 11.7083 14.8438 10.4167C14.8438 9.125 13.7917 8.07292 12.5 8.07292C11.2083 8.07292 10.1562 9.125 10.1562 10.4167C10.1562 11.7083 11.2083 12.7604 12.5 12.7604ZM17.1875 16.9271C17.1875 15.3646 14.0625 14.5833 12.5 14.5833C10.9375 14.5833 7.8125 15.3646 7.8125 16.9271V17.7083H17.1875V16.9271ZM19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM19.7917 19.7917H5.20833V5.20833H19.7917V19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default PortraitIcon;
