import React from 'react';

export interface SwapVerticalCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwapVerticalCircleIcon = ({ size, ...props }: SwapVerticalCircleIconProps) => {
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
      
<path d="M12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337ZM6.77075 9.37504L10.4166 5.72921L14.0624 9.37504H11.4583V13.5417H9.37492V9.37504H6.77075ZM18.2291 15.625L14.5833 19.2709L10.9374 15.625H13.5416V11.4584H15.6249V15.625H18.2291Z" fill="currentColor"/>
    </svg>
  );
};

export default SwapVerticalCircleIcon;
