import React from 'react';

export interface FormatIndentDecreaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatIndentDecreaseIcon = ({ size, ...props }: FormatIndentDecreaseIconProps) => {
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
      
<path d="M11.4583 17.7083H21.875V15.625H11.4583V17.7083ZM3.125 12.5L7.29167 16.6667V8.33333L3.125 12.5ZM3.125 21.875H21.875V19.7917H3.125V21.875ZM3.125 3.125V5.20833H21.875V3.125H3.125ZM11.4583 9.375H21.875V7.29167H11.4583V9.375ZM11.4583 13.5417H21.875V11.4583H11.4583V13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatIndentDecreaseIcon;
