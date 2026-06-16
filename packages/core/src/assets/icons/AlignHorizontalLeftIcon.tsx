import React from 'react';

export interface AlignHorizontalLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalLeftIcon = ({ size, ...props }: AlignHorizontalLeftIconProps) => {
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
      
<path d="M4.16659 22.9166H2.08325V2.08325H4.16659V22.9166ZM22.9166 7.29159H6.24992V10.4166H22.9166V7.29159ZM16.6666 14.5833H6.24992V17.7083H16.6666V14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default AlignHorizontalLeftIcon;
