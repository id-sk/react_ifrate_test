import React from 'react';

export interface DonutLargeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DonutLargeIcon = ({ size, ...props }: DonutLargeIconProps) => {
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
      
<path d="M11.4583 5.29165V2.08331C6.24992 2.60415 2.08325 7.09373 2.08325 12.5C2.08325 17.9062 6.24992 22.3958 11.4583 22.9166V19.7083C8.33325 19.2083 5.20825 16.1666 5.20825 12.5C5.20825 8.83331 8.33325 5.79165 11.4583 5.29165ZM19.7603 11.4583H22.9166C22.427 6.24998 18.7499 2.5729 13.5416 2.08331V5.29165C16.6666 5.73956 19.3124 8.33331 19.7603 11.4583ZM13.5416 19.7083V22.9166C18.7499 22.4271 22.427 18.75 22.9166 13.5416H19.7603C19.3124 16.6666 16.6666 19.2604 13.5416 19.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default DonutLargeIcon;
