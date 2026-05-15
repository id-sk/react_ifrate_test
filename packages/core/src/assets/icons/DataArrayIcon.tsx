import React from 'react';

export interface DataArrayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DataArrayIcon = ({ size, ...props }: DataArrayIconProps) => {
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
        d="M15.6251 4.16675V6.25008H18.7501V18.7501H15.6251V20.8334H20.8334V4.16675H15.6251Z"
        fill="currentColor"
      />
      <path
        d="M4.16675 20.8334H9.37508V18.7501H6.25008V6.25008H9.37508V4.16675H4.16675V20.8334Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DataArrayIcon;
