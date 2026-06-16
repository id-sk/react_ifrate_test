import React from 'react';

export interface Crop169IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Crop169Icon = ({ size, ...props }: Crop169IconProps) => {
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
      
<path d="M19.7917 7.2915H5.20833C4.0625 7.2915 3.125 8.229 3.125 9.37484V15.6248C3.125 16.7707 4.0625 17.7082 5.20833 17.7082H19.7917C20.9375 17.7082 21.875 16.7707 21.875 15.6248V9.37484C21.875 8.229 20.9375 7.2915 19.7917 7.2915ZM19.7917 15.6248H5.20833V9.37484H19.7917V15.6248Z" fill="currentColor"/>
    </svg>
  );
};

export default Crop169Icon;
