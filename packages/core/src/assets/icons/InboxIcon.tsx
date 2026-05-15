import React from 'react';

export interface InboxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InboxIcon = ({ size, ...props }: InboxIconProps) => {
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
        d="M19.7917 3.125H5.19792C4.04167 3.125 3.13542 4.05208 3.13542 5.20833L3.125 19.7917C3.125 20.9375 4.04167 21.875 5.19792 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.05208 20.9375 3.125 19.7917 3.125ZM19.7917 15.625H15.625C15.625 17.3542 14.2188 18.75 12.5 18.75C10.7812 18.75 9.375 17.3542 9.375 15.625H5.19792V5.20833H19.7917V15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InboxIcon;
