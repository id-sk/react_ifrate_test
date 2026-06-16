import React from 'react';

export interface CheckCircleOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CheckCircleOutlineIcon = ({ size, ...props }: CheckCircleOutlineIconProps) => {
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
      
<path d="M17.2812 7.89581L10.4166 14.7604L6.677 11.0312L5.20825 12.5L10.4166 17.7083L18.7499 9.37498L17.2812 7.89581ZM12.4999 2.08331C6.74992 2.08331 2.08325 6.74998 2.08325 12.5C2.08325 18.25 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.25 22.9166 12.5C22.9166 6.74998 18.2499 2.08331 12.4999 2.08331ZM12.4999 20.8333C7.89575 20.8333 4.16659 17.1041 4.16659 12.5C4.16659 7.89581 7.89575 4.16665 12.4999 4.16665C17.1041 4.16665 20.8333 7.89581 20.8333 12.5C20.8333 17.1041 17.1041 20.8333 12.4999 20.8333Z" fill="currentColor"/>
    </svg>
  );
};

export default CheckCircleOutlineIcon;
