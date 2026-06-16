import React from 'react';

export interface RollerShadesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RollerShadesIcon = ({ size, ...props }: RollerShadesIconProps) => {
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
      
<path d="M20.8333 19.7917V3.125H4.16659V19.7917H2.08325V21.875H22.9166V19.7917H20.8333ZM6.24992 19.7917V13.5417H11.4583V15.4167C11.0416 15.7292 10.6249 16.25 10.6249 16.875C10.6249 17.9167 11.4583 18.75 12.4999 18.75C13.5416 18.75 14.3749 17.9167 14.3749 16.875C14.3749 16.25 14.0624 15.7292 13.5416 15.4167V13.5417H18.7499V19.7917H6.24992Z" fill="currentColor"/>
    </svg>
  );
};

export default RollerShadesIcon;
