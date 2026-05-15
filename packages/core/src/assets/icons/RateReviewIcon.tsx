import React from 'react';

export interface RateReviewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RateReviewIcon = ({ size, ...props }: RateReviewIconProps) => {
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
        d="M20.8333 2.0835H4.16659C3.02075 2.0835 2.09367 3.021 2.09367 4.16683L2.08325 22.9168L6.24992 18.7502H20.8333C21.9791 18.7502 22.9166 17.8127 22.9166 16.6668V4.16683C22.9166 3.021 21.9791 2.0835 20.8333 2.0835ZM6.24992 14.5835V12.0106L13.4166 4.84391C13.6249 4.63558 13.9478 4.63558 14.1562 4.84391L15.9999 6.68766C16.2083 6.896 16.2083 7.21891 15.9999 7.42725L8.82284 14.5835H6.24992ZM18.7499 14.5835H10.9374L13.0208 12.5002H18.7499V14.5835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RateReviewIcon;
