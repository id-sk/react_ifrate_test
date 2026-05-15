import React from 'react';

export interface ForkLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ForkLeftIcon = ({ size, ...props }: ForkLeftIconProps) => {
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
        d="M10.8437 16.2396L9.37492 17.7083L5.20825 13.5417L9.37492 9.375L10.8437 10.8437L9.19783 12.5C10.7708 12.1562 13.0833 12.5833 14.5833 13.9167V7.11458L12.927 8.77083L11.4583 7.29167L15.6249 3.125L19.7916 7.29167L18.3228 8.76042L16.6666 7.11458V21.875H14.5833V17.7083C13.8228 15.0208 11.3853 14.0938 9.19783 14.5833L10.8437 16.2396Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ForkLeftIcon;
