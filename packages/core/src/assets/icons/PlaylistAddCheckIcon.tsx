import React from 'react';

export interface PlaylistAddCheckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlaylistAddCheckIcon = ({ size, ...props }: PlaylistAddCheckIconProps) => {
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
      
<path d="M14.0626 9.89579H2.60425V11.9791H14.0626V9.89579Z" fill="currentColor"/>
<path d="M14.0626 5.72913H2.60425V7.81246H14.0626V5.72913Z" fill="currentColor"/>
<path d="M9.89591 14.0625H2.60425V16.1458H9.89591V14.0625Z" fill="currentColor"/>
<path d="M20.9272 11.9062L16.5001 16.3229L14.2917 14.1145L12.823 15.5833L16.5001 19.2708L22.3959 13.375L20.9272 11.9062Z" fill="currentColor"/>
    </svg>
  );
};

export default PlaylistAddCheckIcon;
