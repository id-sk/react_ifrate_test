import React from 'react';

export interface CurtainsClosedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurtainsClosedIcon = ({ size, ...props }: CurtainsClosedIconProps) => {
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
      
<path d="M20.8333 19.7917V3.125H4.16659V19.7917H2.08325V21.875H22.9166V19.7917H20.8333ZM11.4583 5.20833H13.5416V19.7917H11.4583V5.20833Z" fill="currentColor"/>
    </svg>
  );
};

export default CurtainsClosedIcon;
