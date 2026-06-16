import React from 'react';

export interface InsertDriveFileIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertDriveFileIcon = ({ size, ...props }: InsertDriveFileIconProps) => {
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
      
<path d="M6.25008 2.08325C5.10425 2.08325 4.17716 3.02075 4.17716 4.16659L4.16675 20.8333C4.16675 21.9791 5.09383 22.9166 6.23966 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V8.33325L14.5834 2.08325H6.25008ZM13.5417 9.37492V3.64575L19.2709 9.37492H13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default InsertDriveFileIcon;
