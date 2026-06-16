import React from 'react';

export interface PaddingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PaddingIcon = ({ size, ...props }: PaddingIconProps) => {
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
      
<path d="M3.125 3.125V21.875H21.875V3.125H3.125ZM19.7917 19.7917H5.20833V5.20833H19.7917V19.7917ZM11.4583 7.29167H13.5417V9.375H11.4583V7.29167ZM7.29167 7.29167H9.375V9.375H7.29167V7.29167ZM15.625 7.29167H17.7083V9.375H15.625V7.29167Z" fill="currentColor"/>
    </svg>
  );
};

export default PaddingIcon;
