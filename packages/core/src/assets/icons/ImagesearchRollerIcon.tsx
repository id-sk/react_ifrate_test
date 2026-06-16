import React from 'react';

export interface ImagesearchRollerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ImagesearchRollerIcon = ({ size, ...props }: ImagesearchRollerIconProps) => {
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
      
<path d="M21.875 1.5625V7.8125H7.29167V5.72917H5.20833V9.89583H15.625V15.1042H17.7083V23.4375H11.4583V15.1042H13.5417V11.9792H3.125V3.64583H7.29167V1.5625" fill="currentColor"/>
    </svg>
  );
};

export default ImagesearchRollerIcon;
