import React from 'react';

export interface HotelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HotelIcon = ({ size, ...props }: HotelIconProps) => {
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
        d="M7.29163 13.0208C9.02079 13.0208 10.4166 11.625 10.4166 9.89583C10.4166 8.16667 9.02079 6.77083 7.29163 6.77083C5.56246 6.77083 4.16663 8.16667 4.16663 9.89583C4.16663 11.625 5.56246 13.0208 7.29163 13.0208ZM19.7916 6.77083H11.4583V14.0625H3.12496V4.6875H1.04163V20.3125H3.12496V17.1875H21.875V20.3125H23.9583V10.9375C23.9583 8.63542 22.0937 6.77083 19.7916 6.77083Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HotelIcon;
