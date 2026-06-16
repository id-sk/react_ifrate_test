import React from 'react';

export interface StorageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StorageIcon = ({ size, ...props }: StorageIconProps) => {
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
      
<path d="M2.08325 20.8334H22.9166V16.6667H2.08325V20.8334ZM4.16659 17.7084H6.24992V19.7917H4.16659V17.7084ZM2.08325 4.16675V8.33341H22.9166V4.16675H2.08325ZM6.24992 7.29175H4.16659V5.20841H6.24992V7.29175ZM2.08325 14.5834H22.9166V10.4167H2.08325V14.5834ZM4.16659 11.4584H6.24992V13.5417H4.16659V11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default StorageIcon;
