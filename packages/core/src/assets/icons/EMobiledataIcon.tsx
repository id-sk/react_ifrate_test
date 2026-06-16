import React from 'react';

export interface EMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EMobiledataIcon = ({ size, ...props }: EMobiledataIconProps) => {
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
      
<path d="M16.6667 9.37508V7.29175H8.33337V17.7084H16.6667V15.6251H10.4167V13.5417H16.6667V11.4584H10.4167V9.37508H16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default EMobiledataIcon;
