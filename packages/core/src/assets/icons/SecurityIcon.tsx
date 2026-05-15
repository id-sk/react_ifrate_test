import React from 'react';

export interface SecurityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SecurityIcon = ({ size, ...props }: SecurityIconProps) => {
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
        d="M12.5 1.04175L3.125 5.20841V11.4584C3.125 17.2397 7.125 22.6459 12.5 23.9584C17.875 22.6459 21.875 17.2397 21.875 11.4584V5.20841L12.5 1.04175ZM12.5 12.4897H19.7917C19.2396 16.7813 16.375 20.6042 12.5 21.8022V12.5001H5.20833V6.56258L12.5 3.323V12.4897Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SecurityIcon;
