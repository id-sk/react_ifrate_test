import React from 'react';

export interface AllInboxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AllInboxIcon = ({ size, ...props }: AllInboxIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V12.5C3.125 13.6458 4.0625 14.5833 5.20833 14.5833H19.7917C20.9375 14.5833 21.875 13.6458 21.875 12.5V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM19.7917 9.375H15.625C15.625 11.0625 14.1875 12.5 12.5 12.5C10.8125 12.5 9.375 11.0625 9.375 9.375H5.20833V5.20833H19.7917V9.375ZM15.625 16.6667H21.875V19.7917C21.875 20.9375 20.9375 21.875 19.7917 21.875H5.20833C4.0625 21.875 3.125 20.9375 3.125 19.7917V16.6667H9.375C9.375 18.3958 10.7708 19.7917 12.5 19.7917C14.2292 19.7917 15.625 18.3958 15.625 16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default AllInboxIcon;
