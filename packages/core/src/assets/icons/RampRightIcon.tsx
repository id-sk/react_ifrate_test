import React from 'react';

export interface RampRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RampRightIcon = ({ size, ...props }: RampRightIconProps) => {
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
        d="M13.0208 21.875H15.1041V7.11458L16.7603 8.77083L18.2291 7.29167L14.0624 3.125L9.89575 7.29167L11.3645 8.76042L13.0208 7.11458V9.375C13.0208 13.8229 8.82284 16.8021 6.77075 17.9896L8.29159 19.5104C10.2812 18.2917 11.8749 16.8646 13.0208 15.3125V21.875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RampRightIcon;
