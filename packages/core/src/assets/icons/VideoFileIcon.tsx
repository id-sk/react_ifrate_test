import React from 'react';

export interface VideoFileIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VideoFileIcon = ({ size, ...props }: VideoFileIconProps) => {
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
      
<path d="M14.5833 2.08337H6.26038C5.11454 2.08337 4.17704 3.01046 4.17704 4.16671L4.16663 20.8334C4.16663 21.9792 5.10413 22.9167 6.24996 22.9167H18.75C19.8958 22.9167 20.8333 21.9792 20.8333 20.8334V8.33337L14.5833 2.08337ZM13.5416 9.37504V3.64587L19.2708 9.37504H13.5416ZM14.5833 14.5834L16.6666 13.4792V17.7709L14.5833 16.6667V17.7084C14.5833 18.2813 14.1145 18.75 13.5416 18.75H9.37496C8.80204 18.75 8.33329 18.2813 8.33329 17.7084V13.5417C8.33329 12.9688 8.80204 12.5 9.37496 12.5H13.5416C14.1145 12.5 14.5833 12.9688 14.5833 13.5417V14.5834Z" fill="currentColor"/>
    </svg>
  );
};

export default VideoFileIcon;
