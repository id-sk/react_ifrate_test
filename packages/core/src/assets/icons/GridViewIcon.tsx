import React from 'react';

export interface GridViewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GridViewIcon = ({ size, ...props }: GridViewIconProps) => {
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
      
<path fillRule="evenodd" clipRule="evenodd" d="M3.125 3.125V11.4583H11.4583V3.125H3.125ZM9.375 9.375H5.20833V5.20833H9.375V9.375ZM3.125 13.5417V21.875H11.4583V13.5417H3.125ZM9.375 19.7917H5.20833V15.625H9.375V19.7917ZM13.5417 3.125V11.4583H21.875V3.125H13.5417ZM19.7917 9.375H15.625V5.20833H19.7917V9.375ZM13.5417 13.5417V21.875H21.875V13.5417H13.5417ZM19.7917 19.7917H15.625V15.625H19.7917V19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default GridViewIcon;
