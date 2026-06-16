import React from 'react';

export interface TabletIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TabletIcon = ({ size, ...props }: TabletIconProps) => {
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
      
<path d="M21.8751 4.16675H3.12508C1.97925 4.16675 1.04175 5.10425 1.04175 6.25008V18.7501C1.04175 19.8959 1.97925 20.8334 3.12508 20.8334H21.8751C23.0209 20.8334 23.948 19.8959 23.948 18.7501L23.9584 6.25008C23.9584 5.10425 23.0209 4.16675 21.8751 4.16675ZM19.7917 18.7501H5.20841V6.25008H19.7917V18.7501Z" fill="currentColor"/>
    </svg>
  );
};

export default TabletIcon;
