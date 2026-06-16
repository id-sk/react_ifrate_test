import React from 'react';

export interface FolderSpecialIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderSpecialIcon = ({ size, ...props }: FolderSpecialIconProps) => {
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
      
<path d="M20.8334 6.24984H12.5L10.4167 4.1665H4.16671C3.02087 4.1665 2.08337 5.104 2.08337 6.24984V18.7498C2.08337 19.8957 3.02087 20.8332 4.16671 20.8332H20.8334C21.9792 20.8332 22.9167 19.8957 22.9167 18.7498V8.33317C22.9167 7.18734 21.9792 6.24984 20.8334 6.24984ZM18.6875 17.7082L15.625 15.9165L12.5625 17.7082L13.375 14.2394L10.6771 11.9061L14.2292 11.604L15.625 8.33317L17.0209 11.604L20.573 11.9061L17.875 14.2394L18.6875 17.7082Z" fill="currentColor"/>
    </svg>
  );
};

export default FolderSpecialIcon;
