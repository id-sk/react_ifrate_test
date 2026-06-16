import React from 'react';

export interface StarRateIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StarRateIcon = ({ size, ...props }: StarRateIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M15.0312 10.4167L12.4999 2.08337L9.96867 10.4167H2.08325L8.52075 15.0105L6.07284 22.9167L12.4999 18.0313L18.9374 22.9167L16.4895 15.0105L22.9166 10.4167H15.0312Z" fill="currentColor"/>
    </svg>
  );
};

export default StarRateIcon;
