import React from 'react';

export interface DownloadForOfflineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DownloadForOfflineIcon = ({ size, ...props }: DownloadForOfflineIconProps) => {
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
      
<path d="M12.4999 2.08325C6.76034 2.08325 2.08325 6.76034 2.08325 12.4999C2.08325 18.2395 6.76034 22.9166 12.4999 22.9166C18.2395 22.9166 22.9166 18.2395 22.9166 12.4999C22.9166 6.76034 18.2395 2.08325 12.4999 2.08325ZM11.4583 10.4166V6.24992H13.5416V10.4166H16.6666L12.4999 14.5833L8.33325 10.4166H11.4583ZM17.7083 17.7083H7.29159V15.6249H17.7083V17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default DownloadForOfflineIcon;
