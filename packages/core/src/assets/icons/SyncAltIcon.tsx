import React from 'react';

export interface SyncAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SyncAltIcon = ({ size, ...props }: SyncAltIconProps) => {
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
      
<path d="M18.75 12.5L22.9167 8.33329L18.75 4.16663V7.29163H3.12504V9.37496H18.75V12.5Z" fill="currentColor"/>
<path d="M6.25004 12.5L2.08337 16.6666L6.25004 20.8333V17.7083H21.875V15.625H6.25004V12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default SyncAltIcon;
