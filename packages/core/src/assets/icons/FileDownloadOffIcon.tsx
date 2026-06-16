import React from 'react';

export interface FileDownloadOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FileDownloadOffIcon = ({ size, ...props }: FileDownloadOffIconProps) => {
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
      
<path d="M10.1146 5.6875V2.38542H16.3646V8.63542H20.5313L16.7917 12.375L10.1146 5.6875ZM22.8125 21.3333L3.66667 2.1875L2.1875 3.65625L7.16667 8.63542H5.94792L13.2396 15.9271L13.8542 15.3125L16.5417 18.0104H5.94792V20.0938H18.625L21.3438 22.8125L22.8125 21.3333Z" fill="currentColor"/>
    </svg>
  );
};

export default FileDownloadOffIcon;
