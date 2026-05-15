import React from 'react';

export interface SuperscriptIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SuperscriptIcon = ({ size, ...props }: SuperscriptIconProps) => {
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
        d="M20.3749 7.29175H18.2916V8.33341H21.4166V9.37508H17.2499V7.29175C17.2499 6.71883 17.7187 6.25008 18.2916 6.25008H20.3749V5.20841H17.2499V4.16675H20.3749C20.9478 4.16675 21.4166 4.6355 21.4166 5.20841V6.25008C21.4166 6.823 20.9478 7.29175 20.3749 7.29175ZM3.58325 20.8334H6.35408L9.89575 15.1876H10.0208L13.5624 20.8334H16.3333L11.4895 13.2605L16.0103 6.25008H13.2187L10.0208 11.448H9.89575L6.677 6.25008H3.90617L8.40617 13.2605L3.58325 20.8334Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SuperscriptIcon;
