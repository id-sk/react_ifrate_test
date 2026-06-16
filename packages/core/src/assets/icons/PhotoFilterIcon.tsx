import React from 'react';

export interface PhotoFilterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoFilterIcon = ({ size, ...props }: PhotoFilterIconProps) => {
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
      
<path d="M19.7917 10.4167V19.7917H5.1875V5.20833H14.5625V3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V10.4167H19.7917ZM17.6875 10.4167L18.6667 8.27083L20.8125 7.29167L18.6667 6.3125L17.6875 4.16667L16.7083 6.3125L14.5625 7.29167L16.7083 8.27083L17.6875 10.4167ZM13.7812 11.1979L12.4792 8.33333L11.1771 11.1979L8.3125 12.5L11.1771 13.8021L12.4792 16.6667L13.7812 13.8021L16.6458 12.5L13.7812 11.1979Z" fill="currentColor"/>
    </svg>
  );
};

export default PhotoFilterIcon;
