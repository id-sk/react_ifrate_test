import React from 'react';

export interface CloudDoneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CloudDoneIcon = ({ size, ...props }: CloudDoneIconProps) => {
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
      
<path d="M20.1562 10.4584C19.4479 6.86466 16.2917 4.16675 12.5 4.16675C9.48958 4.16675 6.875 5.87508 5.57292 8.37508C2.4375 8.70841 0 11.3647 0 14.5834C0 18.0313 2.80208 20.8334 6.25 20.8334H19.7917C22.6667 20.8334 25 18.5001 25 15.6251C25 12.8751 22.8646 10.6459 20.1562 10.4584ZM10.4167 17.7084L6.77083 14.0626L8.23958 12.5938L10.4167 14.7605L15.8125 9.37508L17.2812 10.8438L10.4167 17.7084Z" fill="currentColor"/>
    </svg>
  );
};

export default CloudDoneIcon;
