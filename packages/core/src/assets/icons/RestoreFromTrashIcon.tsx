import React from 'react';

export interface RestoreFromTrashIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RestoreFromTrashIcon = ({ size, ...props }: RestoreFromTrashIconProps) => {
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
      
<path d="M19.7916 4.16667H16.1458L15.1041 3.125H9.89575L8.85409 4.16667H5.20825V6.25H19.7916V4.16667ZM6.24992 7.29167V19.7917C6.24992 20.9375 7.18742 21.875 8.33325 21.875H16.6666C17.8124 21.875 18.7499 20.9375 18.7499 19.7917V7.29167H6.24992ZM14.5833 14.5833V18.75H10.4166V14.5833H8.33325L12.4999 10.4167L16.6666 14.5833H14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default RestoreFromTrashIcon;
