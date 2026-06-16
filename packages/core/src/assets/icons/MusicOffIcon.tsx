import React from 'react';

export interface MusicOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MusicOffIcon = ({ size, ...props }: MusicOffIconProps) => {
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
      
<path d="M4.44792 3.125L3.125 4.44792L12.5 13.8229V14.1146C11.8854 13.7604 11.1771 13.5417 10.4167 13.5417C8.11458 13.5417 6.25 15.4062 6.25 17.7083C6.25 20.0104 8.11458 21.875 10.4167 21.875C12.7188 21.875 14.5833 20.0104 14.5833 17.7083V15.9062L20.5521 21.875L21.875 20.5521L4.44792 3.125ZM14.5833 7.29167H18.75V3.125H12.5V8.52083L14.5833 10.6042V7.29167Z" fill="currentColor"/>
    </svg>
  );
};

export default MusicOffIcon;
