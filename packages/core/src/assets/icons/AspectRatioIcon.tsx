import React from 'react';

export interface AspectRatioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AspectRatioIcon = ({ size, ...props }: AspectRatioIconProps) => {
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
      
<path d="M19.7917 12.5H17.7084V15.625H14.5834V17.7083H19.7917V12.5ZM7.29175 9.375H10.4167V7.29167H5.20841V12.5H7.29175V9.375ZM21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V19.7917C1.04175 20.9375 1.97925 21.875 3.12508 21.875H21.8751C23.0209 21.875 23.9584 20.9375 23.9584 19.7917V5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125ZM21.8751 19.8021H3.12508V5.19792H21.8751V19.8021Z" fill="currentColor"/>
    </svg>
  );
};

export default AspectRatioIcon;
