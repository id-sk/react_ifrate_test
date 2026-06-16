import React from 'react';

export interface MusicNoteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MusicNoteIcon = ({ size, ...props }: MusicNoteIconProps) => {
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
      
<path d="M12.5 3.125V14.1146C11.8854 13.7604 11.1771 13.5417 10.4167 13.5417C8.11458 13.5417 6.25 15.4062 6.25 17.7083C6.25 20.0104 8.11458 21.875 10.4167 21.875C12.7188 21.875 14.5833 20.0104 14.5833 17.7083V7.29167H18.75V3.125H12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default MusicNoteIcon;
