import React from 'react';

export interface FilePresentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilePresentIcon = ({ size, ...props }: FilePresentIconProps) => {
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
        d="M15.625 2.08331H6.24996C5.10413 2.08331 4.16663 3.02081 4.16663 4.16665V20.8333C4.16663 21.9791 5.10413 22.9166 6.24996 22.9166H18.75C19.8958 22.9166 20.8333 21.9791 20.8333 20.8333V7.29165L15.625 2.08331ZM6.24996 20.8333V4.16665H14.5833V8.33331H18.75V20.8333H6.24996ZM16.6666 10.4166V15.625C16.6666 17.9271 14.802 19.7916 12.5 19.7916C10.1979 19.7916 8.33329 17.9271 8.33329 15.625V8.85415C8.33329 7.3229 9.64579 6.10415 11.2083 6.2604C12.5625 6.39581 13.5416 7.6354 13.5416 8.99998V15.625H11.4583V8.85415C11.4583 8.56248 11.2291 8.33331 10.9375 8.33331C10.6458 8.33331 10.4166 8.56248 10.4166 8.85415V15.625C10.4166 16.7708 11.3541 17.7083 12.5 17.7083C13.6458 17.7083 14.5833 16.7708 14.5833 15.625V10.4166H16.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FilePresentIcon;
