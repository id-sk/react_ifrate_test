import React from 'react';

export interface PhotoLibraryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoLibraryIcon = ({ size, ...props }: PhotoLibraryIconProps) => {
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
      
<path d="M22.9167 16.6668V4.16683C22.9167 3.021 21.9792 2.0835 20.8334 2.0835H8.33337C7.18754 2.0835 6.25004 3.021 6.25004 4.16683V16.6668C6.25004 17.8127 7.18754 18.7502 8.33337 18.7502H20.8334C21.9792 18.7502 22.9167 17.8127 22.9167 16.6668ZM11.4584 12.5002L13.573 15.3231L16.6667 11.4585L20.8334 16.6668H8.33337L11.4584 12.5002ZM2.08337 6.25016V20.8335C2.08337 21.9793 3.02087 22.9168 4.16671 22.9168H18.75V20.8335H4.16671V6.25016H2.08337Z" fill="currentColor"/>
    </svg>
  );
};

export default PhotoLibraryIcon;
