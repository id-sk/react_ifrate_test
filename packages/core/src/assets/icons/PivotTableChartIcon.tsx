import React from 'react';

export interface PivotTableChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PivotTableChartIcon = ({ size, ...props }: PivotTableChartIconProps) => {
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
      
<path d="M9.89591 7.81234H21.3542V4.68734C21.3542 3.5415 20.4167 2.604 19.2709 2.604H9.89591V7.81234ZM2.60425 7.81234H7.81258V2.604H4.68758C3.54175 2.604 2.60425 3.5415 2.60425 4.68734V7.81234ZM4.68758 21.354H7.81258V9.89567H2.60425V19.2707C2.60425 20.4165 3.54175 21.354 4.68758 21.354ZM13.0209 22.3957L8.85425 18.229L13.0209 14.0623V22.3957ZM14.0626 13.0207L18.2292 8.854L22.3959 13.0207H14.0626Z" fill="currentColor"/>
<path d="M14.6667 19.2707H13.0209V17.1873H14.6667C16.0522 17.1873 17.1876 16.0623 17.1876 14.6665V13.0207H19.2709V14.6665C19.2709 17.2082 17.2084 19.2707 14.6667 19.2707Z" fill="currentColor"/>
    </svg>
  );
};

export default PivotTableChartIcon;
