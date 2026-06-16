import React from 'react';

export interface ReportGmailerrorredIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReportGmailerrorredIcon = ({ size, ...props }: ReportGmailerrorredIconProps) => {
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
      
<path d="M16.3854 3.125H8.61458L3.125 8.61458V16.3854L8.61458 21.875H16.3854L21.875 16.3854V8.61458L16.3854 3.125ZM19.7917 15.5208L15.5208 19.7917H9.47917L5.20833 15.5208V9.47917L9.47917 5.20833H15.5208L19.7917 9.47917V15.5208Z" fill="currentColor"/>
<path d="M13.5417 7.29167H11.4583V13.5417H13.5417V7.29167Z" fill="currentColor"/>
<path d="M13.5417 15.625H11.4583V17.7083H13.5417V15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default ReportGmailerrorredIcon;
