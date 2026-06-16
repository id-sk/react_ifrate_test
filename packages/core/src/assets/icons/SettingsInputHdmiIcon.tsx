import React from 'react';

export interface SettingsInputHdmiIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsInputHdmiIcon = ({ size, ...props }: SettingsInputHdmiIconProps) => {
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
      
<path d="M18.7499 7.29171V4.16671C18.7499 3.02087 17.8124 2.08337 16.6666 2.08337H8.33325C7.18742 2.08337 6.24992 3.02087 6.24992 4.16671V7.29171H5.20825V13.5417L8.33325 19.7917V22.9167H16.6666V19.7917L19.7916 13.5417V7.29171H18.7499ZM8.33325 4.16671H16.6666V7.29171H14.5833V5.20837H13.5416V7.29171H11.4583V5.20837H10.4166V7.29171H8.33325V4.16671Z" fill="currentColor"/>
    </svg>
  );
};

export default SettingsInputHdmiIcon;
