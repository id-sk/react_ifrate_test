import React from 'react';

export interface MouseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MouseIcon = ({ size, ...props }: MouseIconProps) => {
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
      
<path d="M13.5417 1.07812V9.33854H20.8334C20.8334 5.08854 17.6563 1.58854 13.5417 1.07812ZM4.16675 15.5885C4.16675 20.1927 7.89591 23.9219 12.5001 23.9219C17.1042 23.9219 20.8334 20.1927 20.8334 15.5885V11.4219H4.16675V15.5885ZM11.4584 1.07812C7.34383 1.58854 4.16675 5.08854 4.16675 9.33854H11.4584V1.07812Z" fill="currentColor"/>
    </svg>
  );
};

export default MouseIcon;
