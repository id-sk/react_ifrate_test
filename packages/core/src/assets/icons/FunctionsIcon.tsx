import React from 'react';

export interface FunctionsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FunctionsIcon = ({ size, ...props }: FunctionsIconProps) => {
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
        d="M18.75 4.16675H6.25V6.25008L13.0208 12.5001L6.25 18.7501V20.8334H18.75V17.7084H11.4583L16.6667 12.5001L11.4583 7.29175H18.75V4.16675Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FunctionsIcon;
