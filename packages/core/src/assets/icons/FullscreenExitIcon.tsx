import React from 'react';

export interface FullscreenExitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FullscreenExitIcon = ({ size, ...props }: FullscreenExitIconProps) => {
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
      
<path d="M5.20825 16.6668H8.33325V19.7918H10.4166V14.5835H5.20825V16.6668ZM8.33325 8.3335H5.20825V10.4168H10.4166V5.2085H8.33325V8.3335ZM14.5833 19.7918H16.6666V16.6668H19.7916V14.5835H14.5833V19.7918ZM16.6666 8.3335V5.2085H14.5833V10.4168H19.7916V8.3335H16.6666Z" fill="currentColor"/>
    </svg>
  );
};

export default FullscreenExitIcon;
