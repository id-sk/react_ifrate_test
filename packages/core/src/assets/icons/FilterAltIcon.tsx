import React from 'react';

export interface FilterAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterAltIcon = ({ size, ...props }: FilterAltIconProps) => {
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
        d="M4.43233 5.84377C6.5365 8.54169 10.4219 13.5417 10.4219 13.5417V19.7917C10.4219 20.3646 10.8907 20.8334 11.4636 20.8334H13.5469C14.1198 20.8334 14.5886 20.3646 14.5886 19.7917V13.5417C14.5886 13.5417 18.4636 8.54169 20.5678 5.84377C21.099 5.15627 20.6094 4.16669 19.7448 4.16669H5.25525C4.39067 4.16669 3.90108 5.15627 4.43233 5.84377Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FilterAltIcon;
