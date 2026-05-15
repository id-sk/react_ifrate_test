import React from 'react';

export interface QrCodeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const QrCodeIcon = ({ size, ...props }: QrCodeIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.125 11.4583H11.4583V3.125H3.125V11.4583ZM5.20833 5.20833H9.375V9.375H5.20833V5.20833Z"
        fill="currentColor"
      />
      <path
        d="M3.125 21.875H11.4583V13.5417H3.125V21.875ZM5.20833 15.625H9.375V19.7917H5.20833V15.625Z"
        fill="currentColor"
      />
      <path
        d="M13.5417 3.125V11.4583H21.875V3.125H13.5417ZM19.7917 9.375H15.625V5.20833H19.7917V9.375Z"
        fill="currentColor"
      />
      <path d="M21.875 19.7917H19.7917V21.875H21.875V19.7917Z" fill="currentColor" />
      <path d="M15.625 13.5417H13.5417V15.625H15.625V13.5417Z" fill="currentColor" />
      <path d="M17.7083 15.625H15.625V17.7083H17.7083V15.625Z" fill="currentColor" />
      <path d="M15.625 17.7083H13.5417V19.7917H15.625V17.7083Z" fill="currentColor" />
      <path d="M17.7083 19.7917H15.625V21.875H17.7083V19.7917Z" fill="currentColor" />
      <path d="M19.7917 17.7083H17.7083V19.7917H19.7917V17.7083Z" fill="currentColor" />
      <path d="M19.7917 13.5417H17.7083V15.625H19.7917V13.5417Z" fill="currentColor" />
      <path d="M21.875 15.625H19.7917V17.7083H21.875V15.625Z" fill="currentColor" />
    </svg>
  );
};

export default QrCodeIcon;
