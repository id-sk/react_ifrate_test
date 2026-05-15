import React from 'react';

export interface Crop75IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Crop75Icon = ({ size, ...props }: Crop75IconProps) => {
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
        d="M19.7917 5.2085H5.20833C4.0625 5.2085 3.125 6.146 3.125 7.29183V17.7085C3.125 18.8543 4.0625 19.7918 5.20833 19.7918H19.7917C20.9375 19.7918 21.875 18.8543 21.875 17.7085V7.29183C21.875 6.146 20.9375 5.2085 19.7917 5.2085ZM19.7917 17.7085H5.20833V7.29183H19.7917V17.7085Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Crop75Icon;
