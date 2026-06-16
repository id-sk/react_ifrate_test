import React from 'react';

export interface TabletAndroidIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TabletAndroidIcon = ({ size, ...props }: TabletAndroidIconProps) => {
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
      
<g clipPath="url(#clip0_3239_31822)">
<path d="M18.75 0H6.25C4.52083 0 3.125 1.39583 3.125 3.125V21.875C3.125 23.6042 4.52083 25 6.25 25H18.75C20.4792 25 21.875 23.6042 21.875 21.875V3.125C21.875 1.39583 20.4792 0 18.75 0ZM14.5833 22.9167H10.4167V21.875H14.5833V22.9167ZM20.0521 19.7917H4.94792V3.125H20.0521V19.7917Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3239_31822">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default TabletAndroidIcon;
