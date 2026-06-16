import React from 'react';

export interface EjectIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EjectIcon = ({ size, ...props }: EjectIconProps) => {
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
      
<path d="M5.20825 17.7083H19.7916V19.7916H5.20825V17.7083ZM12.4999 5.20831L5.552 15.625H19.4478L12.4999 5.20831Z" fill="currentColor"/>
    </svg>
  );
};

export default EjectIcon;
