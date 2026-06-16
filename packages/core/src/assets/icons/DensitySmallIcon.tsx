import React from 'react';

export interface DensitySmallIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DensitySmallIcon = ({ size, ...props }: DensitySmallIconProps) => {
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
      
<path d="M21.875 2.08331H3.125V4.16665H21.875V2.08331Z" fill="currentColor"/>
<path d="M21.875 20.8333H3.125V22.9166H21.875V20.8333Z" fill="currentColor"/>
<path d="M21.875 14.5833H3.125V16.6666H21.875V14.5833Z" fill="currentColor"/>
<path d="M21.875 8.33331H3.125V10.4166H21.875V8.33331Z" fill="currentColor"/>
    </svg>
  );
};

export default DensitySmallIcon;
