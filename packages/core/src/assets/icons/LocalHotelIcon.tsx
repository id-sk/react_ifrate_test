import React from 'react';

export interface LocalHotelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalHotelIcon = ({ size, ...props }: LocalHotelIconProps) => {
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
        d="M7.29175 13.0208C9.02091 13.0208 10.4167 11.625 10.4167 9.89583C10.4167 8.16667 9.02091 6.77083 7.29175 6.77083C5.56258 6.77083 4.16675 8.16667 4.16675 9.89583C4.16675 11.625 5.56258 13.0208 7.29175 13.0208ZM19.7917 6.77083H11.4584V14.0625H3.12508V4.6875H1.04175V20.3125H3.12508V17.1875H21.8751V20.3125H23.9584V10.9375C23.9584 8.63542 22.0938 6.77083 19.7917 6.77083Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocalHotelIcon;
