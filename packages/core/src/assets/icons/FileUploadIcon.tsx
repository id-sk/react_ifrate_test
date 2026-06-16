import React from 'react';

export interface FileUploadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FileUploadIcon = ({ size, ...props }: FileUploadIconProps) => {
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
      
<path d="M9.37504 17.1874H15.625V10.9374H19.7917L12.5 3.64575L5.20837 10.9374H9.37504V17.1874ZM5.20837 19.2708H19.7917V21.3541H5.20837V19.2708Z" fill="currentColor"/>
    </svg>
  );
};

export default FileUploadIcon;
