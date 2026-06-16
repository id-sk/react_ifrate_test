import React from 'react';

export interface EnhancedEncryptionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EnhancedEncryptionIcon = ({ size, ...props }: EnhancedEncryptionIconProps) => {
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
      
<path d="M18.7501 8.85417H17.7084V6.77083C17.7084 3.89583 15.3751 1.5625 12.5001 1.5625C9.62508 1.5625 7.29175 3.89583 7.29175 6.77083V8.85417H6.25008C5.10425 8.85417 4.16675 9.79167 4.16675 10.9375V21.3542C4.16675 22.5 5.10425 23.4375 6.25008 23.4375H18.7501C19.8959 23.4375 20.8334 22.5 20.8334 21.3542V10.9375C20.8334 9.79167 19.8959 8.85417 18.7501 8.85417ZM9.27091 6.77083C9.27091 4.98958 10.7188 3.54167 12.5001 3.54167C14.2813 3.54167 15.7292 4.98958 15.7292 6.77083V8.85417H9.27091V6.77083ZM16.6667 17.1875H13.5417V20.3125H11.4584V17.1875H8.33341V15.1042H11.4584V11.9792H13.5417V15.1042H16.6667V17.1875Z" fill="currentColor"/>
    </svg>
  );
};

export default EnhancedEncryptionIcon;
