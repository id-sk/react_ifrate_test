import React from 'react';

export interface EmergencyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EmergencyIcon = ({ size, ...props }: EmergencyIconProps) => {
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
      
<path d="M21.6563 9.61458L19.5729 6.01042L14.5833 8.89583V3.125H10.4167V8.89583L5.42708 6.01042L3.34375 9.61458L8.33333 12.5L3.34375 15.3854L5.42708 18.9896L10.4167 16.1042V21.875H14.5833V16.1042L19.5729 18.9896L21.6563 15.3854L16.6667 12.5L21.6563 9.61458Z" fill="currentColor"/>
    </svg>
  );
};

export default EmergencyIcon;
