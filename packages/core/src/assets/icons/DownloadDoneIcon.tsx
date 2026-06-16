import React from 'react';

export interface DownloadDoneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DownloadDoneIcon = ({ size, ...props }: DownloadDoneIconProps) => {
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
      
<path d="M20.9687 5.6355L19.5 4.16675L9.92708 13.7397L5.5 9.323L4.03125 10.7917L9.92708 16.6876L20.9687 5.6355Z" fill="currentColor"/>
<path d="M19.7917 18.7501H5.20833V20.8334H19.7917V18.7501Z" fill="currentColor"/>
    </svg>
  );
};

export default DownloadDoneIcon;
