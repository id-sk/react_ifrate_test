import React from 'react';

export interface TabletMacIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TabletMacIcon = ({ size, ...props }: TabletMacIconProps) => {
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
      
<g clipPath="url(#clip0_3239_31820)">
<path d="M19.7917 0H5.20841C3.77091 0 2.60425 1.16667 2.60425 2.60417V22.3958C2.60425 23.8333 3.77091 25 5.20841 25H19.7917C21.2292 25 22.3959 23.8333 22.3959 22.3958V2.60417C22.3959 1.16667 21.2292 0 19.7917 0ZM12.5001 23.9583C11.6355 23.9583 10.9376 23.2604 10.9376 22.3958C10.9376 21.5312 11.6355 20.8333 12.5001 20.8333C13.3647 20.8333 14.0626 21.5312 14.0626 22.3958C14.0626 23.2604 13.3647 23.9583 12.5001 23.9583ZM20.3126 19.7917H4.68758V3.125H20.3126V19.7917Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3239_31820">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default TabletMacIcon;
