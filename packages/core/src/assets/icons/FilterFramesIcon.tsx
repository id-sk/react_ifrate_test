import React from 'react';

export interface FilterFramesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterFramesIcon = ({ size, ...props }: FilterFramesIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M20.8333 5.20817H16.6666L12.4999 1.0415L8.33325 5.20817H4.16659C3.02075 5.20817 2.08325 6.14567 2.08325 7.2915V21.8748C2.08325 23.0207 3.02075 23.9582 4.16659 23.9582H20.8333C21.9791 23.9582 22.9166 23.0207 22.9166 21.8748V7.2915C22.9166 6.14567 21.9791 5.20817 20.8333 5.20817ZM20.8333 21.8748H4.16659V7.2915H8.87492L12.5416 3.64567L16.1666 7.2915H20.8333V21.8748ZM18.7499 9.37484H6.24992V19.7915H18.7499" fill="currentColor"/>
    </svg>
  );
};

export default FilterFramesIcon;
