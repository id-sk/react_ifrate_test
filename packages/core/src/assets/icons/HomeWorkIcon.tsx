import React from 'react';

export interface HomeWorkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HomeWorkIcon = ({ size, ...props }: HomeWorkIconProps) => {
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
        d="M1.04175 11.4583V21.875H6.25008V15.625H10.4167V21.875H15.6251V11.4583L8.33341 6.25L1.04175 11.4583Z"
        fill="currentColor"
      />
      <path
        d="M10.4167 3.125V5.17708L17.7084 10.3854V11.4583H19.7917V13.5417H17.7084V15.625H19.7917V17.7083H17.7084V21.875H23.9584V3.125H10.4167ZM19.7917 9.375H17.7084V7.29167H19.7917V9.375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HomeWorkIcon;
