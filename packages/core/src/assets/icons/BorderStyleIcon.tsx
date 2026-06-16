import React from 'react';

export interface BorderStyleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BorderStyleIcon = ({ size, ...props }: BorderStyleIconProps) => {
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
      
<path d="M15.625 21.875H17.7083V19.7917H15.625V21.875ZM19.7917 21.875H21.875V19.7917H19.7917V21.875ZM7.29167 21.875H9.375V19.7917H7.29167V21.875ZM11.4583 21.875H13.5417V19.7917H11.4583V21.875ZM19.7917 17.7083H21.875V15.625H19.7917V17.7083ZM19.7917 13.5417H21.875V11.4583H19.7917V13.5417ZM3.125 3.125V21.875H5.20833V5.20833H21.875V3.125H3.125ZM19.7917 9.375H21.875V7.29167H19.7917V9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default BorderStyleIcon;
