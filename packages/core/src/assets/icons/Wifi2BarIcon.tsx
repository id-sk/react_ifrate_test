import React from 'react';

export interface Wifi2BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Wifi2BarIcon = ({ size, ...props }: Wifi2BarIconProps) => {
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
      
<path d="M12.5001 6.77075C15.6563 6.77075 18.5209 8.052 20.5834 10.1249L18.3751 12.3333C16.8751 10.8333 14.7917 9.89575 12.5001 9.89575C10.2084 9.89575 8.12508 10.8333 6.62508 12.3437L4.41675 10.1353C6.47925 8.052 9.34383 6.77075 12.5001 6.77075ZM12.5001 13.0208C11.0626 13.0208 9.7605 13.6041 8.823 14.5416L12.5001 18.2291L16.1772 14.5416C15.2397 13.6041 13.9376 13.0208 12.5001 13.0208Z" fill="currentColor"/>
    </svg>
  );
};

export default Wifi2BarIcon;
