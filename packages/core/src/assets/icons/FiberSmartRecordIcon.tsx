import React from 'react';

export interface FiberSmartRecordIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FiberSmartRecordIcon = ({ size, ...props }: FiberSmartRecordIconProps) => {
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
      
<path d="M9.37508 20.8333C13.9775 20.8333 17.7084 17.1023 17.7084 12.5C17.7084 7.89759 13.9775 4.16663 9.37508 4.16663C4.77271 4.16663 1.04175 7.89759 1.04175 12.5C1.04175 17.1023 4.77271 20.8333 9.37508 20.8333Z" fill="currentColor"/>
<path d="M17.7084 4.43746V6.61454C20.1355 7.46871 21.8751 9.78121 21.8751 12.5C21.8751 15.2187 20.1355 17.5312 17.7084 18.3854V20.5625C21.3022 19.6354 23.9584 16.3854 23.9584 12.5C23.9584 8.61454 21.3022 5.36454 17.7084 4.43746Z" fill="currentColor"/>
    </svg>
  );
};

export default FiberSmartRecordIcon;
