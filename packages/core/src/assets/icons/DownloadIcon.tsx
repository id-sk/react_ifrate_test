import React from 'react';

export interface DownloadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DownloadIcon = ({ size, ...props }: DownloadIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.20825 21.3541H19.7916V19.2708H5.20825V21.3541ZM19.7916 9.89575H15.6249V3.64575H9.37492V9.89575H5.20825L12.4999 17.1874L19.7916 9.89575Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DownloadIcon;
