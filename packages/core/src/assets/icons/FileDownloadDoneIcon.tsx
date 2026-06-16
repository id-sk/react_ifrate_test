import React from 'react';

export interface FileDownloadDoneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FileDownloadDoneIcon = ({ size, ...props }: FileDownloadDoneIconProps) => {
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
      
<path d="M5.20825 18.7501H19.7916V20.8334H5.20825V18.7501ZM9.99992 15.9376L5.20825 11.1459L7.29159 9.16675L9.99992 11.8751L17.7083 4.16675L19.7916 6.25008L9.99992 15.9376Z" fill="currentColor"/>
    </svg>
  );
};

export default FileDownloadDoneIcon;
