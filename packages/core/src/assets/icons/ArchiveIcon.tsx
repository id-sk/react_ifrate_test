import React from 'react';

export interface ArchiveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArchiveIcon = ({ size, ...props }: ArchiveIconProps) => {
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
        d="M21.3958 5.44792L19.9479 3.69792C19.6667 3.34375 19.2396 3.125 18.75 3.125H6.25C5.76042 3.125 5.33333 3.34375 5.04167 3.69792L3.60417 5.44792C3.30208 5.80208 3.125 6.27083 3.125 6.77083V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V6.77083C21.875 6.27083 21.6979 5.80208 21.3958 5.44792ZM12.5 18.2292L6.77083 12.5H10.4167V10.4167H14.5833V12.5H18.2292L12.5 18.2292ZM5.33333 5.20833L6.17708 4.16667H18.6771L19.6562 5.20833H5.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArchiveIcon;
