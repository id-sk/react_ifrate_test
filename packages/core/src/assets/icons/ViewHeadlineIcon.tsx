import React from 'react';

export interface ViewHeadlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewHeadlineIcon = ({ size, ...props }: ViewHeadlineIconProps) => {
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
      
<path d="M4.16675 15.625H20.8334V13.5417H4.16675V15.625ZM4.16675 19.7917H20.8334V17.7084H4.16675V19.7917ZM4.16675 11.4584H20.8334V9.37504H4.16675V11.4584ZM4.16675 5.20837V7.29171H20.8334V5.20837H4.16675Z" fill="currentColor"/>
    </svg>
  );
};

export default ViewHeadlineIcon;
