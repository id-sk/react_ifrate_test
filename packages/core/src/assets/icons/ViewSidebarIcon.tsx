import React from 'react';

export interface ViewSidebarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewSidebarIcon = ({ size, ...props }: ViewSidebarIconProps) => {
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
        d="M16.6667 20.8333H2.08337V4.16663H16.6667V20.8333ZM18.75 8.33329H22.9167V4.16663H18.75V8.33329ZM18.75 20.8333H22.9167V16.6666H18.75V20.8333ZM18.75 14.5833H22.9167V10.4166H18.75V14.5833Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ViewSidebarIcon;
