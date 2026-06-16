import React from 'react';

export interface ForestIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ForestIcon = ({ size, ...props }: ForestIconProps) => {
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
      
<path d="M16.6667 12.5002L9.375 2.0835L2.08333 12.5002H4.02083L0 18.7502H7.29167V22.9168H11.4583V18.7502H18.75L14.7292 12.5002H16.6667Z" fill="currentColor"/>
<path d="M20.9792 12.5002H22.9167L15.625 2.0835L13.1354 5.63558L18.6667 13.5418H16.6354L19.9896 18.7502H25L20.9792 12.5002Z" fill="currentColor"/>
<path d="M17.7083 19.7918H13.5417V22.9168H17.7083V19.7918Z" fill="currentColor"/>
    </svg>
  );
};

export default ForestIcon;
