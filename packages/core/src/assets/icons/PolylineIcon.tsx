import React from 'react';

export interface PolylineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PolylineIcon = ({ size, ...props }: PolylineIconProps) => {
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
      
<path d="M15.625 16.6666V17.9791L9.375 14.8541V11.552L12.1875 8.33325H16.6667V2.08325H10.4167V7.18742L7.60417 10.4166H3.125V16.6666H8.33333L15.625 20.3124V22.9166H21.875V16.6666H15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default PolylineIcon;
