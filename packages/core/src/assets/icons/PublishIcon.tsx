import React from 'react';

export interface PublishIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PublishIcon = ({ size, ...props }: PublishIconProps) => {
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
      
<path d="M5.20825 4.16675V6.25008H19.7916V4.16675H5.20825ZM5.20825 14.5834H9.37492V20.8334H15.6249V14.5834H19.7916L12.4999 7.29175L5.20825 14.5834Z" fill="currentColor"/>
    </svg>
  );
};

export default PublishIcon;
