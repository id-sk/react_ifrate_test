import React from 'react';

export interface TungstenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TungstenIcon = ({ size, ...props }: TungstenIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.5416 19.2709H11.4583V22.3959H13.5416V19.2709Z" fill="currentColor" />
      <path d="M5.20825 10.9376H2.08325V13.0209H5.20825V10.9376Z" fill="currentColor" />
      <path d="M22.9166 10.9376H19.7916V13.0209H22.9166V10.9376Z" fill="currentColor" />
      <path
        d="M18.022 16.5566L16.5562 18.0224L18.7659 20.2321L20.2317 18.7663L18.022 16.5566Z"
        fill="currentColor"
      />
      <path
        d="M6.98478 16.5492L4.7751 18.7589L6.24086 20.2247L8.45054 18.015L6.98478 16.5492Z"
        fill="currentColor"
      />
      <path
        d="M15.6249 7.83342V2.60425H9.37492V7.83342C8.1145 8.79175 7.29159 10.2813 7.29159 11.9792C7.29159 14.8542 9.62492 17.1876 12.4999 17.1876C15.3749 17.1876 17.7083 14.8542 17.7083 11.9792C17.7083 10.2813 16.8853 8.79175 15.6249 7.83342ZM11.4583 4.68758H13.5416V6.87508C13.2083 6.81258 12.8541 6.77091 12.4999 6.77091C12.1458 6.77091 11.7916 6.81258 11.4583 6.87508V4.68758Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TungstenIcon;
