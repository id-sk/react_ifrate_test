import React from 'react';

export interface LocalHospitalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalHospitalIcon = ({ size, ...props }: LocalHospitalIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.13542 4.0625 3.13542 5.20833L3.125 19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM18.75 14.5833H14.5833V18.75H10.4167V14.5833H6.25V10.4167H10.4167V6.25H14.5833V10.4167H18.75V14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalHospitalIcon;
