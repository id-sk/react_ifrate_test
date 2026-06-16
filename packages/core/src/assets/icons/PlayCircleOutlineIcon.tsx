import React from 'react';

export interface PlayCircleOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayCircleOutlineIcon = ({ size, ...props }: PlayCircleOutlineIconProps) => {
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
      
<path d="M10.4166 17.1875L16.6666 12.5L10.4166 7.81254V17.1875ZM12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337ZM12.4999 20.8334C7.90617 20.8334 4.16659 17.0938 4.16659 12.5C4.16659 7.90629 7.90617 4.16671 12.4999 4.16671C17.0937 4.16671 20.8333 7.90629 20.8333 12.5C20.8333 17.0938 17.0937 20.8334 12.4999 20.8334Z" fill="currentColor"/>
    </svg>
  );
};

export default PlayCircleOutlineIcon;
