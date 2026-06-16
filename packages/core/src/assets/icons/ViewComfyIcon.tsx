import React from 'react';

export interface ViewComfyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewComfyIcon = ({ size, ...props }: ViewComfyIconProps) => {
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
      
<path d="M2.08325 4.1665V11.4582H22.9166V4.1665H2.08325ZM10.4166 20.8332H22.9166V13.5415H10.4166V20.8332ZM2.08325 20.8332H8.33325V13.5415H2.08325V20.8332Z" fill="currentColor"/>
    </svg>
  );
};

export default ViewComfyIcon;
