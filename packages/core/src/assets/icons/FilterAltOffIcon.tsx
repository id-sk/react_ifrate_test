import React from 'react';

export interface FilterAltOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterAltOffIcon = ({ size, ...props }: FilterAltOffIconProps) => {
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
      
<path d="M21.3542 5.10417C21.8854 4.41667 21.3958 3.42708 20.5313 3.42708H7.85417L16.1563 11.7292L21.3542 5.10417Z" fill="currentColor"/>
<path d="M3.66667 2.1875L2.1875 3.65625L11.1562 12.8021V19.0521C11.1562 19.625 11.625 20.0938 12.1979 20.0938H14.2813C14.8542 20.0938 15.3229 19.625 15.3229 19.0521V16.7917L21.3438 22.8125L22.8125 21.3438L3.66667 2.1875Z" fill="currentColor"/>
    </svg>
  );
};

export default FilterAltOffIcon;
