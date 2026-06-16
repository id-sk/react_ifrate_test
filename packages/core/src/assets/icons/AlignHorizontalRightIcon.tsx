import React from 'react';

export interface AlignHorizontalRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalRightIcon = ({ size, ...props }: AlignHorizontalRightIconProps) => {
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
      
<path d="M20.8333 2.08325H22.9166V22.9166H20.8333V2.08325ZM2.08325 10.4166H18.7499V7.29159H2.08325V10.4166ZM8.33325 17.7083H18.7499V14.5833H8.33325V17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default AlignHorizontalRightIcon;
