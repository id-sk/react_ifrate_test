import React from 'react';

export interface DoorBackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoorBackIcon = ({ size, ...props }: DoorBackIconProps) => {
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
      
<path d="M19.7917 19.7917V5.20833C19.7917 4.0625 18.8542 3.125 17.7083 3.125H7.29167C6.14583 3.125 5.20833 4.0625 5.20833 5.20833V19.7917H3.125V21.875H21.875V19.7917H19.7917ZM11.4583 13.5417H9.375V11.4583H11.4583V13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default DoorBackIcon;
