import React from 'react';

export interface ClearAllIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ClearAllIcon = ({ size, ...props }: ClearAllIconProps) => {
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
      
<path d="M5.20833 13.5417H19.7917V11.4584H5.20833V13.5417ZM3.125 17.7084H17.7083V15.6251H3.125V17.7084ZM7.29167 7.29175V9.37508H21.875V7.29175H7.29167Z" fill="currentColor"/>
    </svg>
  );
};

export default ClearAllIcon;
