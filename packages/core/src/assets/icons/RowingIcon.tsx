import React from 'react';

export interface RowingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RowingIcon = ({ size, ...props }: RowingIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3230_40094)">
        <path
          d="M8.33325 14.5834L3.64575 19.2709L5.20825 20.8334L8.85409 17.1875H10.9374L8.33325 14.5834ZM15.1041 0.520874C13.9583 0.520874 13.0208 1.45837 13.0208 2.60421C13.0208 3.75004 13.9583 4.68754 15.1041 4.68754C16.2499 4.68754 17.1874 3.75004 17.1874 2.60421C17.1874 1.45837 16.2499 0.520874 15.1041 0.520874ZM21.3541 21.3646L18.2291 24.4792L15.1145 21.3438V19.7917L7.71867 12.4063C7.39575 12.4584 7.08325 12.4792 6.77075 12.4792V10.2292C8.49992 10.2605 10.5312 9.32296 11.6353 8.10421L13.0937 6.48962C13.4583 6.08337 14.1249 5.72921 14.8124 5.72921H14.8437C16.1353 5.73962 17.1874 6.79171 17.1874 8.08337V14.073C17.1874 14.948 16.8228 15.75 16.2291 16.323L12.4999 12.5938V10.2292C11.8437 10.7709 11.0103 11.2917 10.1145 11.6771L16.6666 18.2292H18.2291L21.3541 21.3646Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3230_40094">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RowingIcon;
