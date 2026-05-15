import React from 'react';

export interface FilterListIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterListIcon = ({ size, ...props }: FilterListIconProps) => {
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
        d="M10.4167 18.75H14.5833V16.6667H10.4167V18.75ZM3.125 6.25V8.33333H21.875V6.25H3.125ZM6.25 13.5417H18.75V11.4583H6.25V13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FilterListIcon;
