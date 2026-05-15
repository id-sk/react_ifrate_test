import React from 'react';

export interface FilterBAndWIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterBAndWIcon = ({ size, ...props }: FilterBAndWIconProps) => {
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
        d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM19.7917 19.7917L12.5 11.4583V19.7917H5.20833L12.5 11.4583V5.20833H19.7917V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FilterBAndWIcon;
