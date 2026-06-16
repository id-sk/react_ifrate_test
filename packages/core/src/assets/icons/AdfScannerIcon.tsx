import React from 'react';

export interface AdfScannerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AdfScannerIcon = ({ size, ...props }: AdfScannerIconProps) => {
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
      
<path d="M19.7916 12.5001H18.7499V4.16675H6.24992V12.5001H5.20825C3.47909 12.5001 2.08325 13.8959 2.08325 15.6251V20.8334H22.9166V15.6251C22.9166 13.8959 21.5208 12.5001 19.7916 12.5001ZM16.6666 12.5001H8.33325V6.25008H16.6666V12.5001ZM18.7499 17.7084C18.177 17.7084 17.7083 17.2397 17.7083 16.6667C17.7083 16.0938 18.177 15.6251 18.7499 15.6251C19.3228 15.6251 19.7916 16.0938 19.7916 16.6667C19.7916 17.2397 19.3228 17.7084 18.7499 17.7084Z" fill="currentColor"/>
    </svg>
  );
};

export default AdfScannerIcon;
