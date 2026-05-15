import React from 'react';

export interface ScreenshotMonitorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScreenshotMonitorIcon = ({ size, ...props }: ScreenshotMonitorIconProps) => {
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
        d="M20.8333 3.125H4.16659C3.01034 3.125 2.08325 4.05208 2.08325 5.20833V17.7083C2.08325 18.8542 3.01034 19.7917 4.16659 19.7917H8.33325V21.875H16.6666V19.7917H20.8333C21.9791 19.7917 22.9166 18.8542 22.9166 17.7083V5.20833C22.9166 4.05208 21.9791 3.125 20.8333 3.125ZM20.8333 17.7083H4.16659V5.20833H20.8333V17.7083Z"
        fill="currentColor"
      />
      <path d="M6.77075 7.8125H9.37492V6.25H5.20825V10.4167H6.77075V7.8125Z" fill="currentColor" />
      <path d="M19.7916 12.5H18.2291V15.1042H15.6249V16.6667H19.7916V12.5Z" fill="currentColor" />
    </svg>
  );
};

export default ScreenshotMonitorIcon;
