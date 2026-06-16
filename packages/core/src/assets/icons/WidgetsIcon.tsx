import React from 'react';

export interface WidgetsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WidgetsIcon = ({ size, ...props }: WidgetsIconProps) => {
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
      
<path d="M12.8542 14.2239V22.5572H21.1875V14.2239H12.8542ZM2.4375 22.5572H10.7708V14.2239H2.4375V22.5572ZM2.4375 3.80721V12.1405H10.7708V3.80721H2.4375ZM16.6667 2.44263L10.7708 8.32804L16.6667 14.2239L22.5625 8.32804L16.6667 2.44263Z" fill="currentColor"/>
    </svg>
  );
};

export default WidgetsIcon;
