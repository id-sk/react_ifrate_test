import React from 'react';

export interface EmergencyRecordingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EmergencyRecordingIcon = ({ size, ...props }: EmergencyRecordingIconProps) => {
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
      
<path d="M18.7499 10.9165V6.24984C18.7499 5.104 17.8124 4.1665 16.6666 4.1665H4.16659C3.02075 4.1665 2.08325 5.104 2.08325 6.24984V18.7498C2.08325 19.8957 3.02075 20.8332 4.16659 20.8332H16.6666C17.8124 20.8332 18.7499 19.8957 18.7499 18.7498V14.0832L22.9166 18.229V6.77067L18.7499 10.9165ZM12.4999 12.4998L15.6249 14.3019L14.5833 16.104L11.4583 14.3019V17.7082H9.37492V14.3019L6.24992 16.104L5.20825 14.3019L8.33325 12.4998L5.20825 10.6978L6.24992 8.89567L9.37492 10.6978V7.2915H11.4583V10.6978L14.5833 8.89567L15.6249 10.6978L12.4999 12.4998Z" fill="currentColor"/>
    </svg>
  );
};

export default EmergencyRecordingIcon;
