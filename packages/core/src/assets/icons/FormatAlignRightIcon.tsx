import React from 'react';

export interface FormatAlignRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignRightIcon = ({ size, ...props }: FormatAlignRightIconProps) => {
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
      
<path d="M3.125 21.875H21.875V19.7917H3.125V21.875ZM9.375 17.7083H21.875V15.625H9.375V17.7083ZM3.125 13.5417H21.875V11.4583H3.125V13.5417ZM9.375 9.375H21.875V7.29167H9.375V9.375ZM3.125 3.125V5.20833H21.875V3.125H3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatAlignRightIcon;
