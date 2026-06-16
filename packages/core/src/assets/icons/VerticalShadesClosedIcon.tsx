import React from 'react';

export interface VerticalShadesClosedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalShadesClosedIcon = ({ size, ...props }: VerticalShadesClosedIconProps) => {
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
      
<path d="M20.8333 19.7917V3.125H4.16659V19.7917H2.08325V21.875H22.9166V19.7917H20.8333ZM13.5416 5.20833H15.1041V19.7917H13.5416V5.20833ZM11.4583 19.7917H9.89575V5.20833H11.4583V19.7917ZM6.24992 5.20833H7.81242V19.7917H6.24992V5.20833ZM17.1874 19.7917V5.20833H18.7499V19.7917H17.1874Z" fill="currentColor"/>
    </svg>
  );
};

export default VerticalShadesClosedIcon;
