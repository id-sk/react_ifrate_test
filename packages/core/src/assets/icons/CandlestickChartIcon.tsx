import React from 'react';

export interface CandlestickChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CandlestickChartIcon = ({ size, ...props }: CandlestickChartIconProps) => {
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
        d="M9.37504 4.16675H7.29171V6.25008H5.20837V18.7501H7.29171V20.8334H9.37504V18.7501H11.4584V6.25008H9.37504V4.16675Z"
        fill="currentColor"
      />
      <path
        d="M19.7917 8.33341H17.7084V4.16675H15.625V8.33341H13.5417V15.6251H15.625V20.8334H17.7084V15.6251H19.7917V8.33341Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CandlestickChartIcon;
