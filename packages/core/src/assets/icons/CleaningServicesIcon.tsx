import React from 'react';

export interface CleaningServicesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CleaningServicesIcon = ({ size, ...props }: CleaningServicesIconProps) => {
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
        d="M16.6667 11.4582H15.625V3.12484C15.625 1.979 14.6875 1.0415 13.5417 1.0415H11.4583C10.3125 1.0415 9.375 1.979 9.375 3.12484V11.4582H8.33333C5.45833 11.4582 3.125 13.7915 3.125 16.6665V23.9582H21.875V16.6665C21.875 13.7915 19.5417 11.4582 16.6667 11.4582ZM19.7917 21.8748H17.7083V18.7498C17.7083 18.1769 17.2396 17.7082 16.6667 17.7082C16.0937 17.7082 15.625 18.1769 15.625 18.7498V21.8748H13.5417V18.7498C13.5417 18.1769 13.0729 17.7082 12.5 17.7082C11.9271 17.7082 11.4583 18.1769 11.4583 18.7498V21.8748H9.375V18.7498C9.375 18.1769 8.90625 17.7082 8.33333 17.7082C7.76042 17.7082 7.29167 18.1769 7.29167 18.7498V21.8748H5.20833V16.6665C5.20833 14.9478 6.61458 13.5415 8.33333 13.5415H16.6667C18.3854 13.5415 19.7917 14.9478 19.7917 16.6665V21.8748Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CleaningServicesIcon;
