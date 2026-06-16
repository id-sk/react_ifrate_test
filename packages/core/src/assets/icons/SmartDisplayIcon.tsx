import React from 'react';

export interface SmartDisplayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SmartDisplayIcon = ({ size, ...props }: SmartDisplayIconProps) => {
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
      
<path d="M20.8333 4.16675H4.16659C3.02075 4.16675 2.08325 5.10425 2.08325 6.25008V18.7501C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.7501V6.25008C22.9166 5.10425 21.9791 4.16675 20.8333 4.16675ZM9.89575 17.1876V7.81258L17.1874 12.5001L9.89575 17.1876Z" fill="currentColor"/>
    </svg>
  );
};

export default SmartDisplayIcon;
