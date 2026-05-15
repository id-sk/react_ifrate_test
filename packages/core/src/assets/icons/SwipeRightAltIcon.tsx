import React from 'react';

export interface SwipeRightAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwipeRightAltIcon = ({ size, ...props }: SwipeRightAltIconProps) => {
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
        d="M13.4375 11.4583C12.9583 9.08329 10.8542 7.29163 8.33333 7.29163C5.45833 7.29163 3.125 9.62496 3.125 12.5C3.125 15.375 5.45833 17.7083 8.33333 17.7083C10.8542 17.7083 12.9583 15.9166 13.4375 13.5416H17.8854L16.2292 15.1979L17.7083 16.6666L21.875 12.5L17.7083 8.33329L16.2396 9.80204L17.8854 11.4583H13.4375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwipeRightAltIcon;
