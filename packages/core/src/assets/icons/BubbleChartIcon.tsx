import React from 'react';

export interface BubbleChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BubbleChartIcon = ({ size, ...props }: BubbleChartIconProps) => {
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
      
<path d="M7.49996 18.3334C9.34091 18.3334 10.8333 16.841 10.8333 15.0001C10.8333 13.1591 9.34091 11.6667 7.49996 11.6667C5.65901 11.6667 4.16663 13.1591 4.16663 15.0001C4.16663 16.841 5.65901 18.3334 7.49996 18.3334Z" fill="currentColor"/>
<path d="M15.4166 20.8334C16.5672 20.8334 17.5 19.9007 17.5 18.7501C17.5 17.5995 16.5672 16.6667 15.4166 16.6667C14.266 16.6667 13.3333 17.5995 13.3333 18.7501C13.3333 19.9007 14.266 20.8334 15.4166 20.8334Z" fill="currentColor"/>
<path d="M15.8333 14.1667C18.5947 14.1667 20.8333 11.9282 20.8333 9.16675C20.8333 6.40532 18.5947 4.16675 15.8333 4.16675C13.0719 4.16675 10.8333 6.40532 10.8333 9.16675C10.8333 11.9282 13.0719 14.1667 15.8333 14.1667Z" fill="currentColor"/>
    </svg>
  );
};

export default BubbleChartIcon;
