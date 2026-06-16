import React from 'react';

export interface SettingsEthernetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsEthernetIcon = ({ size, ...props }: SettingsEthernetIconProps) => {
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
      
<path d="M8.09383 7.04171L6.48967 5.70837L0.854248 12.5L6.48967 19.2917L8.09383 17.9584L3.56258 12.5L8.09383 7.04171ZM7.29175 13.5417H9.37508V11.4584H7.29175V13.5417ZM17.7084 11.4584H15.6251V13.5417H17.7084V11.4584ZM11.4584 13.5417H13.5417V11.4584H11.4584V13.5417ZM18.5105 5.70837L16.9063 7.04171L21.4376 12.5L16.9063 17.9584L18.5105 19.2917L24.1459 12.5L18.5105 5.70837Z" fill="currentColor"/>
    </svg>
  );
};

export default SettingsEthernetIcon;
