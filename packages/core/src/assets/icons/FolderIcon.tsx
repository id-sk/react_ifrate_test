import React from 'react';

export interface FolderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderIcon = ({ size, ...props }: FolderIconProps) => {
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
      
<path d="M10.4167 4.16675H4.16671C3.02087 4.16675 2.09379 5.10425 2.09379 6.25008L2.08337 18.7501C2.08337 19.8959 3.02087 20.8334 4.16671 20.8334H20.8334C21.9792 20.8334 22.9167 19.8959 22.9167 18.7501V8.33341C22.9167 7.18758 21.9792 6.25008 20.8334 6.25008H12.5L10.4167 4.16675Z" fill="currentColor"/>
    </svg>
  );
};

export default FolderIcon;
