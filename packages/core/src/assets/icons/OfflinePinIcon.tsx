import React from 'react';

export interface OfflinePinIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OfflinePinIcon = ({ size, ...props }: OfflinePinIconProps) => {
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
      
<path d="M12.4999 2.08337C6.77075 2.08337 2.08325 6.77087 2.08325 12.5C2.08325 18.2292 6.77075 22.9167 12.4999 22.9167C18.2291 22.9167 22.9166 18.2292 22.9166 12.5C22.9166 6.77087 18.2291 2.08337 12.4999 2.08337ZM17.7083 18.75H7.29159V16.6667H17.7083V18.75ZM10.7291 14.5834L7.29159 11.1459L8.74992 9.68754L10.7291 11.6667L16.2499 6.14587L17.7083 7.60421L10.7291 14.5834Z" fill="currentColor"/>
    </svg>
  );
};

export default OfflinePinIcon;
