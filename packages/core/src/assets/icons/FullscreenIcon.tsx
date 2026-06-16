import React from 'react';

export interface FullscreenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FullscreenIcon = ({ size, ...props }: FullscreenIconProps) => {
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
      
<path d="M7.29159 14.5835H5.20825V19.7918H10.4166V17.7085H7.29159V14.5835ZM5.20825 10.4168H7.29159V7.29183H10.4166V5.2085H5.20825V10.4168ZM17.7083 17.7085H14.5833V19.7918H19.7916V14.5835H17.7083V17.7085ZM14.5833 5.2085V7.29183H17.7083V10.4168H19.7916V5.2085H14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default FullscreenIcon;
