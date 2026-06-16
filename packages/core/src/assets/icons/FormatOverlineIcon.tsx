import React from 'react';

export interface FormatOverlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatOverlineIcon = ({ size, ...props }: FormatOverlineIconProps) => {
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
      
<path d="M19.7916 3.125V5.20833H5.20825V3.125H19.7916ZM12.4999 7.29167C8.46867 7.29167 5.20825 10.5521 5.20825 14.5833C5.20825 18.6146 8.46867 21.875 12.4999 21.875C16.5312 21.875 19.7916 18.6146 19.7916 14.5833C19.7916 10.5521 16.5312 7.29167 12.4999 7.29167ZM12.4999 19.2708C9.90617 19.2708 7.81242 17.1771 7.81242 14.5833C7.81242 11.9896 9.90617 9.89583 12.4999 9.89583C15.0937 9.89583 17.1874 11.9896 17.1874 14.5833C17.1874 17.1771 15.0937 19.2708 12.4999 19.2708Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatOverlineIcon;
