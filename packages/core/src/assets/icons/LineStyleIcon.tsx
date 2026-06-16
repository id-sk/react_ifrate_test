import React from 'react';

export interface LineStyleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LineStyleIcon = ({ size, ...props }: LineStyleIconProps) => {
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
      
<path d="M3.125 16.6666H8.33333V14.5833H3.125V16.6666ZM9.89583 16.6666H15.1042V14.5833H9.89583V16.6666ZM16.6667 16.6666H21.875V14.5833H16.6667V16.6666ZM3.125 20.8333H5.20833V18.75H3.125V20.8333ZM7.29167 20.8333H9.375V18.75H7.29167V20.8333ZM11.4583 20.8333H13.5417V18.75H11.4583V20.8333ZM15.625 20.8333H17.7083V18.75H15.625V20.8333ZM19.7917 20.8333H21.875V18.75H19.7917V20.8333ZM3.125 12.5H11.4583V10.4166H3.125V12.5ZM13.5417 12.5H21.875V10.4166H13.5417V12.5ZM3.125 4.16663V8.33329H21.875V4.16663H3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default LineStyleIcon;
