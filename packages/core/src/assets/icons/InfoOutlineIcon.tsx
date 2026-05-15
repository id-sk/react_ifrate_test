import React from 'react';

export interface InfoOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InfoOutlineIcon = ({ size, ...props }: InfoOutlineIconProps) => {
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
        d="M11.45 7.25H13.55V9.35H11.45V7.25ZM12.5 17.75C13.0775 17.75 13.55 17.2775 13.55 16.7V12.5C13.55 11.9225 13.0775 11.45 12.5 11.45C11.9225 11.45 11.45 11.9225 11.45 12.5V16.7C11.45 17.2775 11.9225 17.75 12.5 17.75ZM12.5 2C6.704 2 2 6.704 2 12.5C2 18.296 6.704 23 12.5 23C18.296 23 23 18.296 23 12.5C23 6.704 18.296 2 12.5 2ZM12.5 20.9C7.8695 20.9 4.1 17.1305 4.1 12.5C4.1 7.8695 7.8695 4.1 12.5 4.1C17.1305 4.1 20.9 7.8695 20.9 12.5C20.9 17.1305 17.1305 20.9 12.5 20.9Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InfoOutlineIcon;
