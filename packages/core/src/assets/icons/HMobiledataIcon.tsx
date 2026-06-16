import React from 'react';

export interface HMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HMobiledataIcon = ({ size, ...props }: HMobiledataIconProps) => {
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
      
<path d="M15.6251 11.4584H9.37508V7.29175H7.29175V17.7084H9.37508V13.5417H15.6251V17.7084H17.7084V7.29175H15.6251V11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default HMobiledataIcon;
