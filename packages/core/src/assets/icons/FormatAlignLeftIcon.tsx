import React from 'react';

export interface FormatAlignLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignLeftIcon = ({ size, ...props }: FormatAlignLeftIconProps) => {
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
      
<path d="M15.625 15.625H3.125V17.7083H15.625V15.625ZM15.625 7.29167H3.125V9.375H15.625V7.29167ZM3.125 13.5417H21.875V11.4583H3.125V13.5417ZM3.125 21.875H21.875V19.7917H3.125V21.875ZM3.125 3.125V5.20833H21.875V3.125H3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatAlignLeftIcon;
