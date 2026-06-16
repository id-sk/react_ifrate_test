import React from 'react';

export interface FormatSizeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatSizeIcon = ({ size, ...props }: FormatSizeIconProps) => {
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
      
<path d="M8.85425 4.6875V7.8125H14.0626V20.3125H17.1876V7.8125H22.3959V4.6875H8.85425ZM2.60425 13.0208H5.72925V20.3125H8.85425V13.0208H11.9792V9.89583H2.60425V13.0208Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatSizeIcon;
