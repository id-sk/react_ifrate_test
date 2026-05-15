import React from 'react';

export interface DesktopMacIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DesktopMacIcon = ({ size, ...props }: DesktopMacIconProps) => {
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
        d="M20.8333 3.125H4.16659C3.02075 3.125 2.08325 4.0625 2.08325 5.20833V16.6667C2.08325 17.8125 3.02075 18.75 4.16659 18.75H10.4166L8.33325 20.8333V21.875H16.6666V20.8333L14.5833 18.75H20.8333C21.9791 18.75 22.9166 17.8125 22.9166 16.6667V5.20833C22.9166 4.0625 21.9791 3.125 20.8333 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DesktopMacIcon;
