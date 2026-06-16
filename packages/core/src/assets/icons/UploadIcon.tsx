import React from 'react';

export interface UploadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UploadIcon = ({ size, ...props }: UploadIconProps) => {
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
      
<path d="M5.20825 21.3541H19.7916V19.2708H5.20825V21.3541ZM5.20825 10.9374H9.37492V17.1874H15.6249V10.9374H19.7916L12.4999 3.64575L5.20825 10.9374Z" fill="currentColor"/>
    </svg>
  );
};

export default UploadIcon;
