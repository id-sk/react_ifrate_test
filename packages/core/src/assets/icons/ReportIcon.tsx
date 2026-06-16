import React from 'react';

export interface ReportIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReportIcon = ({ size, ...props }: ReportIconProps) => {
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
      
<path d="M16.3854 3.125H8.61458L3.125 8.61458V16.3854L8.61458 21.875H16.3854L21.875 16.3854V8.61458L16.3854 3.125ZM12.5 18.0208C11.75 18.0208 11.1458 17.4167 11.1458 16.6667C11.1458 15.9167 11.75 15.3125 12.5 15.3125C13.25 15.3125 13.8542 15.9167 13.8542 16.6667C13.8542 17.4167 13.25 18.0208 12.5 18.0208ZM13.5417 13.5417H11.4583V7.29167H13.5417V13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default ReportIcon;
