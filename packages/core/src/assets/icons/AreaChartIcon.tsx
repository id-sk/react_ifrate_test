import React from 'react';

export interface AreaChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AreaChartIcon = ({ size, ...props }: AreaChartIconProps) => {
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
        d="M3.125 14.0624V21.3541H21.875V19.7916L12.5 12.4999L8.33333 18.2291L3.125 14.0624ZM3.125 7.81242L7.29167 10.9374L12.5 3.64575L17.7083 7.81242H21.875V17.1562L12.0833 9.54159L7.9375 15.2499L3.125 11.3958V7.81242Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AreaChartIcon;
