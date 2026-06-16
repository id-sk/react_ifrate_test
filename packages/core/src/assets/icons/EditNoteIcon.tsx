import React from 'react';

export interface EditNoteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditNoteIcon = ({ size, ...props }: EditNoteIconProps) => {
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
      
<path d="M3.05591 8.85417H14.5142V10.9375H3.05591V8.85417ZM3.05591 6.77083H14.5142V4.6875H3.05591V6.77083ZM3.05591 15.1042H10.3476V13.0208H3.05591V15.1042ZM18.6913 11.8437L19.4309 11.1042C19.8372 10.6979 20.4934 10.6979 20.8997 11.1042L21.6392 11.8437C22.0455 12.25 22.0455 12.9062 21.6392 13.3125L20.8997 14.0521L18.6913 11.8437ZM17.9517 12.5833L12.4309 18.1042V20.3125H14.6392L20.1601 14.7917L17.9517 12.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default EditNoteIcon;
