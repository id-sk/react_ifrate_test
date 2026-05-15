import React from 'react';

export interface PianoOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PianoOffIcon = ({ size, ...props }: PianoOffIconProps) => {
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
        d="M22.8125 21.3333L3.66667 2.1875L2.1875 3.65625L3.86458 5.33333V19.0521C3.86458 20.1979 4.80208 21.1354 5.94792 21.1354H19.6667L21.3438 22.8125L22.8125 21.3333ZM9.33333 19.0521H5.94792V7.41667L8.03125 9.5V13.3229C8.03125 13.8958 8.5 14.3646 9.07292 14.3646H9.33333V19.0521ZM10.8958 19.0521V14.3646H11.1562C11.6354 14.3646 12.0104 14.0417 12.1354 13.6042L15.5833 17.0521V19.0521H10.8958ZM12.1979 7.77083L6.8125 2.38542H20.5313C21.6771 2.38542 22.6146 3.32292 22.6146 4.46875V18.1875L20.5313 16.1042V4.46875H18.4479V13.3229C18.4479 13.5208 18.375 13.6979 18.2813 13.8542L14.2813 9.85417V4.46875H12.1979V7.77083Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PianoOffIcon;
