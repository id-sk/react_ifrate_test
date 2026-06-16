import React from 'react';

export interface ViewCarouselIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewCarouselIcon = ({ size, ...props }: ViewCarouselIconProps) => {
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
      
<path d="M2.08325 7.29171H6.24992V17.7084H2.08325V7.29171ZM7.29159 19.7917H17.7083V5.20837H7.29159V19.7917ZM18.7499 7.29171H22.9166V17.7084H18.7499V7.29171Z" fill="currentColor"/>
    </svg>
  );
};

export default ViewCarouselIcon;
