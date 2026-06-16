import React from 'react';

export interface ReorderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReorderIcon = ({ size, ...props }: ReorderIconProps) => {
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
      
<path d="M3.125 15.625H21.875V13.5417H3.125V15.625ZM3.125 19.7917H21.875V17.7084H3.125V19.7917ZM3.125 11.4584H21.875V9.37504H3.125V11.4584ZM3.125 5.20837V7.29171H21.875V5.20837H3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default ReorderIcon;
