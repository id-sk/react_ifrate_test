import React from 'react';

export interface FilterDramaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterDramaIcon = ({ size, ...props }: FilterDramaIconProps) => {
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
        d="M20.1562 10.4582C19.4479 6.86442 16.2917 4.1665 12.5 4.1665C9.48958 4.1665 6.88542 5.87484 5.58333 8.37484C2.44792 8.70817 0 11.354 0 14.5832C0 18.0311 2.80208 20.8332 6.25 20.8332H19.7917C22.6667 20.8332 25 18.4998 25 15.6248C25 12.8748 22.8646 10.6457 20.1562 10.4582ZM19.7917 18.7498H6.25C3.94792 18.7498 2.08333 16.8853 2.08333 14.5832C2.08333 12.2811 3.94792 10.4165 6.25 10.4165C8.55208 10.4165 10.4167 12.2811 10.4167 14.5832H12.5C12.5 11.7082 10.5625 9.2915 7.91667 8.56234C8.96875 7.1665 10.625 6.24984 12.5 6.24984C15.6562 6.24984 18.2292 8.82275 18.2292 11.979V12.4998H19.7917C21.5104 12.4998 22.9167 13.9061 22.9167 15.6248C22.9167 17.3436 21.5104 18.7498 19.7917 18.7498Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FilterDramaIcon;
