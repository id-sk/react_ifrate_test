import React from 'react';

export interface NoEncryptionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoEncryptionIcon = ({ size, ...props }: NoEncryptionIconProps) => {
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
      
<path d="M21.875 22.6873L4.39583 5.20817L3.125 6.479L5.25 8.604C4.60417 8.95817 4.16667 9.63525 4.16667 10.4165V20.8332C4.16667 21.979 5.10417 22.9165 6.25 22.9165H18.75C18.9896 22.9165 19.2188 22.8644 19.4375 22.7915L20.6042 23.9582L21.875 22.6873ZM9.27083 6.24984C9.27083 4.46859 10.7187 3.02067 12.5 3.02067C14.2812 3.02067 15.7292 4.46859 15.7292 6.24984V8.33317H10.0625L20.8333 19.104V10.4165C20.8333 9.27067 19.8958 8.33317 18.75 8.33317H17.7083V6.24984C17.7083 3.37484 15.375 1.0415 12.5 1.0415C9.83333 1.0415 7.66667 3.05192 7.35417 5.62484L9.27083 7.5415V6.24984Z" fill="currentColor"/>
    </svg>
  );
};

export default NoEncryptionIcon;
