import React from 'react';

export interface FilterHdrIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterHdrIcon = ({ size, ...props }: FilterHdrIconProps) => {
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
        d="M14.5834 6.25L10.6772 11.4583L13.6459 15.4167L11.9792 16.6667C10.2188 14.3229 7.29175 10.4167 7.29175 10.4167L1.04175 18.75H23.9584L14.5834 6.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FilterHdrIcon;
