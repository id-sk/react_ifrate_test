import React from 'react';

export interface DisabledByDefaultIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DisabledByDefaultIcon = ({ size, ...props }: DisabledByDefaultIconProps) => {
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
      
<path d="M3.125 3.125V21.875H21.875V3.125H3.125ZM17.7083 16.2396L16.2396 17.7083L12.5 13.9687L8.76042 17.7083L7.29167 16.2396L11.0312 12.5L7.29167 8.76042L8.76042 7.29167L12.5 11.0312L16.2396 7.29167L17.7083 8.76042L13.9687 12.5L17.7083 16.2396Z" fill="currentColor"/>
    </svg>
  );
};

export default DisabledByDefaultIcon;
