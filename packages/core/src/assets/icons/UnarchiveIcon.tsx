import React from 'react';

export interface UnarchiveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnarchiveIcon = ({ size, ...props }: UnarchiveIconProps) => {
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
        d="M21.4062 5.4375L19.9583 3.6875C19.6667 3.34375 19.2396 3.125 18.75 3.125H6.25C5.76042 3.125 5.33333 3.34375 5.05208 3.69792L3.60417 5.4375C3.30208 5.80208 3.125 6.26042 3.125 6.77083V19.7917C3.125 20.9375 4.05208 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V6.77083C21.875 6.26042 21.6979 5.80208 21.4062 5.4375ZM12.5 9.89583L18.2292 15.625H14.5833V17.7083H10.4167V15.625H6.77083L12.5 9.89583ZM5.33333 5.20833L6.1875 4.16667H18.6875L19.6562 5.20833H5.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UnarchiveIcon;
