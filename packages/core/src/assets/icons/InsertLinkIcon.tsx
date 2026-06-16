import React from 'react';

export interface InsertLinkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertLinkIcon = ({ size, ...props }: InsertLinkIconProps) => {
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
      
<path d="M4.06242 12.5001C4.06242 10.7188 5.51034 9.27091 7.29159 9.27091H11.4583V7.29175H7.29159C4.41659 7.29175 2.08325 9.62508 2.08325 12.5001C2.08325 15.3751 4.41659 17.7084 7.29159 17.7084H11.4583V15.7292H7.29159C5.51034 15.7292 4.06242 14.2813 4.06242 12.5001ZM8.33325 13.5417H16.6666V11.4584H8.33325V13.5417ZM17.7083 7.29175H13.5416V9.27091H17.7083C19.4895 9.27091 20.9374 10.7188 20.9374 12.5001C20.9374 14.2813 19.4895 15.7292 17.7083 15.7292H13.5416V17.7084H17.7083C20.5833 17.7084 22.9166 15.3751 22.9166 12.5001C22.9166 9.62508 20.5833 7.29175 17.7083 7.29175Z" fill="currentColor"/>
    </svg>
  );
};

export default InsertLinkIcon;
