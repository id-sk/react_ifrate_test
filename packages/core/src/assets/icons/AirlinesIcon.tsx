import React from 'react';

export interface AirlinesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirlinesIcon = ({ size, ...props }: AirlinesIconProps) => {
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
      
<path d="M13.5416 4.1665L2.08325 20.8332H19.7916L22.9166 4.1665H13.5416ZM15.1041 14.5832C13.6666 14.5832 12.4999 13.4165 12.4999 11.979C12.4999 10.5415 13.6666 9.37484 15.1041 9.37484C16.5416 9.37484 17.7083 10.5415 17.7083 11.979C17.7083 13.4165 16.5416 14.5832 15.1041 14.5832Z" fill="currentColor"/>
    </svg>
  );
};

export default AirlinesIcon;
