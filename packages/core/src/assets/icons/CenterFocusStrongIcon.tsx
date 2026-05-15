import React from 'react';

export interface CenterFocusStrongIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CenterFocusStrongIcon = ({ size, ...props }: CenterFocusStrongIconProps) => {
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
        d="M12.5 8.33333C10.1979 8.33333 8.33333 10.1979 8.33333 12.5C8.33333 14.8021 10.1979 16.6667 12.5 16.6667C14.8021 16.6667 16.6667 14.8021 16.6667 12.5C16.6667 10.1979 14.8021 8.33333 12.5 8.33333ZM5.20833 15.625H3.125V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H9.375V19.7917H5.20833V15.625ZM5.20833 5.20833H9.375V3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V9.375H5.20833V5.20833ZM19.7917 3.125H15.625V5.20833H19.7917V9.375H21.875V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM19.7917 19.7917H15.625V21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V15.625H19.7917V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CenterFocusStrongIcon;
