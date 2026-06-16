import React from 'react';

export interface VideoCameraBackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VideoCameraBackIcon = ({ size, ...props }: VideoCameraBackIconProps) => {
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
      
<path d="M18.7499 10.9165V6.24984C18.7499 5.104 17.8124 4.1665 16.6666 4.1665H4.16659C3.02075 4.1665 2.08325 5.104 2.08325 6.24984V18.7498C2.08325 19.8957 3.02075 20.8332 4.16659 20.8332H16.6666C17.8124 20.8332 18.7499 19.8957 18.7499 18.7498V14.0832L22.9166 18.229V6.77067L18.7499 10.9165ZM5.20825 16.6665L7.68742 13.3644L9.37492 15.6248L12.1041 11.979L15.6249 16.6665H5.20825Z" fill="currentColor"/>
    </svg>
  );
};

export default VideoCameraBackIcon;
