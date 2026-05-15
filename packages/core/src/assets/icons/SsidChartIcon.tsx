import React from 'react';

export interface SsidChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SsidChartIcon = ({ size, ...props }: SsidChartIconProps) => {
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
        d="M21.875 5.69792L12.5 12.5L7.9375 7.9375L3.125 11.4583V8.875L8.15625 5.20833L12.7188 9.77083L21.875 3.125V5.69792ZM21.875 15.625H16.9792L12.6354 19.1042L6.25 12.9271L3.125 15.1458V17.7083L6.04167 15.625L12.5 21.875L17.7083 17.7083H21.875V15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SsidChartIcon;
