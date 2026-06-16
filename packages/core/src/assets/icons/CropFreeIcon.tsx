import React from 'react';

export interface CropFreeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CropFreeIcon = ({ size, ...props }: CropFreeIconProps) => {
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
      
<path d="M3.125 5.20833V9.375H5.20833V5.20833H9.375V3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833ZM5.20833 15.625H3.125V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H9.375V19.7917H5.20833V15.625ZM19.7917 19.7917H15.625V21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V15.625H19.7917V19.7917ZM19.7917 3.125H15.625V5.20833H19.7917V9.375H21.875V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default CropFreeIcon;
