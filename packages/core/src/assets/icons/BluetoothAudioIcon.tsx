import React from 'react';

export interface BluetoothAudioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothAudioIcon = ({ size, ...props }: BluetoothAudioIconProps) => {
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
      
<path d="M14.8282 12.5106L17.2449 14.9272C17.5365 14.1772 17.7032 13.3543 17.7032 12.5002C17.7032 11.646 17.5365 10.8439 17.2553 10.0939L14.8282 12.5106ZM20.3386 6.98975L19.0261 8.30225C19.6824 9.56266 20.047 10.9793 20.047 12.4897C20.047 14.0002 19.672 15.4272 19.0261 16.6772L20.2761 17.9272C21.2865 16.3231 21.8803 14.4272 21.8803 12.396C21.8699 10.4272 21.3074 8.57308 20.3386 6.98975ZM16.3595 8.03141L10.4115 2.0835H9.36987V9.98975L4.58862 5.2085L3.11987 6.67725L8.94279 12.5002L3.11987 18.3231L4.58862 19.7918L9.36987 15.0106V22.9168H10.4115L16.3595 16.9689L11.8803 12.5002L16.3595 8.03141ZM11.4532 6.07308L13.4115 8.03141L11.4532 9.98975V6.07308ZM13.4115 16.9689L11.4532 18.9272V15.0106L13.4115 16.9689Z" fill="currentColor"/>
    </svg>
  );
};

export default BluetoothAudioIcon;
