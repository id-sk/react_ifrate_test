import React from 'react';

export interface PhotoCameraBackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoCameraBackIcon = ({ size, ...props }: PhotoCameraBackIconProps) => {
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
      
<path d="M20.8333 5.20833C21.9791 5.20833 22.9166 6.14583 22.9166 7.29167V19.7917C22.9166 20.9375 21.9791 21.875 20.8333 21.875H4.16659C3.02075 21.875 2.08325 20.9375 2.08325 19.7917V7.29167C2.08325 6.14583 3.02075 5.20833 4.16659 5.20833H7.46867L9.37492 3.125H15.6249L17.5312 5.20833H20.8333ZM20.8333 19.7917V7.29167H4.16659V19.7917H20.8333ZM14.5833 12.5L11.4583 16.375L9.37492 13.5417L6.24992 17.7083H18.7499L14.5833 12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default PhotoCameraBackIcon;
