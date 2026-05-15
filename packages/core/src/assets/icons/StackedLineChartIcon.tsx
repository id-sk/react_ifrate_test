import React from 'react';

export interface StackedLineChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StackedLineChartIcon = ({ size, ...props }: StackedLineChartIconProps) => {
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
        d="M2.08325 20.8228L9.89575 12.9999L14.0624 17.1666L21.4478 8.8645L22.9166 10.3333L14.0624 20.2916L9.89575 16.1249L3.64575 22.3853L2.08325 20.8228ZM3.64575 16.1353L9.89575 9.87492L14.0624 14.0416L22.9166 4.08325L21.4478 2.6145L14.0624 10.9166L9.89575 6.74992L2.08325 14.5728L3.64575 16.1353Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StackedLineChartIcon;
