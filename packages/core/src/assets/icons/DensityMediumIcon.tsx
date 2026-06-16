import React from 'react';

export interface DensityMediumIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DensityMediumIcon = ({ size, ...props }: DensityMediumIconProps) => {
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
      
<path d="M21.875 3.125H3.125V5.20833H21.875V3.125Z" fill="currentColor"/>
<path d="M21.875 19.7917H3.125V21.875H21.875V19.7917Z" fill="currentColor"/>
<path d="M21.875 11.4583H3.125V13.5417H21.875V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default DensityMediumIcon;
