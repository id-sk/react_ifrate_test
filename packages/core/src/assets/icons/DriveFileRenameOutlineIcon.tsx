import React from 'react';

export interface DriveFileRenameOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DriveFileRenameOutlineIcon = ({ size, ...props }: DriveFileRenameOutlineIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.1771 6.03898L17.9167 4.77856C17.1042 3.96606 15.7812 3.96606 14.9687 4.77856L3.125 16.6223V20.8306H7.33333L19.1771 8.9869C20 8.1744 20 6.85148 19.1771 6.03898ZM6.46875 18.7473H5.20833V17.4869L14.2292 8.46606L15.4896 9.72648L6.46875 18.7473ZM11.4583 20.8306L15.625 16.664H21.875V20.8306H11.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DriveFileRenameOutlineIcon;
