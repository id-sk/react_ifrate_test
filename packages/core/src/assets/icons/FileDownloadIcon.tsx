import React from 'react';

export interface FileDownloadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FileDownloadIcon = ({ size, ...props }: FileDownloadIconProps) => {
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
      
<path d="M19.7916 9.89575H15.6249V3.64575H9.37492V9.89575H5.20825L12.4999 17.1874L19.7916 9.89575ZM5.20825 19.2708V21.3541H19.7916V19.2708H5.20825Z" fill="currentColor"/>
    </svg>
  );
};

export default FileDownloadIcon;
