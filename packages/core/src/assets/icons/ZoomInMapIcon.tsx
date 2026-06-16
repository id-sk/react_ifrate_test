import React from 'react';

export interface ZoomInMapIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ZoomInMapIcon = ({ size, ...props }: ZoomInMapIconProps) => {
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
      
<path d="M9.37508 9.37484V3.12484H7.29175V5.82275L4.073 2.604L2.60425 4.07275L5.823 7.2915H3.12508V9.37484H9.37508ZM21.8751 9.37484V7.2915H19.1772L22.3959 4.07275L20.9272 2.604L17.7084 5.82275V3.12484H15.6251V9.37484H21.8751ZM3.12508 15.6248V17.7082H5.823L2.60425 20.9269L4.073 22.3957L7.29175 19.1769V21.8748H9.37508V15.6248H3.12508ZM15.6251 15.6248V21.8748H17.7084V19.1769L20.9272 22.3957L22.3959 20.9269L19.1772 17.7082H21.8751V15.6248H15.6251Z" fill="currentColor"/>
    </svg>
  );
};

export default ZoomInMapIcon;
