import React from 'react';

export interface HPlusMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HPlusMobiledataIcon = ({ size, ...props }: HPlusMobiledataIconProps) => {
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
      
<path d="M11.4583 11.4584H5.20833V7.29175H3.125V17.7084H5.20833V13.5417H11.4583V17.7084H13.5417V7.29175H11.4583V11.4584ZM21.875 11.4584H19.7917V9.37508H17.7083V11.4584H15.625V13.5417H17.7083V15.6251H19.7917V13.5417H21.875V11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default HPlusMobiledataIcon;
