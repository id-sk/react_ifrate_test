import React from 'react';

export interface FestivalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FestivalIcon = ({ size, ...props }: FestivalIconProps) => {
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
      
<path d="M13.5416 6.45833V4.6875H16.6666L15.6249 3.13542L16.6666 1.5625H11.4583V6.45833L2.08325 13.0208V23.4375H9.37492V18.2292L12.5312 16.1458L15.6249 18.2292V23.4375H22.9166V13.0208L13.5416 6.45833Z" fill="currentColor"/>
    </svg>
  );
};

export default FestivalIcon;
