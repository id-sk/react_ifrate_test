import React from 'react';

export interface DesktopWindowsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DesktopWindowsIcon = ({ size, ...props }: DesktopWindowsIconProps) => {
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
        d="M20.8333 3.125H4.16659C3.02075 3.125 2.08325 4.0625 2.08325 5.20833V15.625C2.08325 16.7708 3.02075 17.7083 4.16659 17.7083H10.4166V19.7917H8.33325V21.875H16.6666V19.7917H14.5833V17.7083H20.8333C21.9791 17.7083 22.9166 16.7708 22.9166 15.625V5.20833C22.9166 4.0625 21.9791 3.125 20.8333 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DesktopWindowsIcon;
