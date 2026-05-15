import React from 'react';

export interface ViewArrayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewArrayIcon = ({ size, ...props }: ViewArrayIconProps) => {
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
        d="M21.875 5.20837H18.75V19.7917H21.875V5.20837ZM17.7083 5.20837H7.29167V19.7917H17.7083V5.20837ZM6.25 5.20837H3.125V19.7917H6.25V5.20837Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ViewArrayIcon;
