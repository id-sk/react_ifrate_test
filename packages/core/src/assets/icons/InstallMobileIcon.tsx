import React from 'react';

export interface InstallMobileIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InstallMobileIcon = ({ size, ...props }: InstallMobileIconProps) => {
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
      
<path d="M15.625 18.75H5.20833V6.25002H12.5V1.04169H5.20833C4.0625 1.04169 3.125 1.97919 3.125 3.12502V21.875C3.125 23.0209 4.0625 23.9584 5.20833 23.9584H15.625C16.7708 23.9584 17.7083 23.0209 17.7083 21.875V16.6667H15.625V18.75Z" fill="currentColor"/>
<path d="M16.6667 14.5834L21.875 9.37502L20.4062 7.90627L17.7083 10.5938V3.12502H15.625V10.5938L12.9271 7.90627L11.4583 9.37502L16.6667 14.5834Z" fill="currentColor"/>
    </svg>
  );
};

export default InstallMobileIcon;
