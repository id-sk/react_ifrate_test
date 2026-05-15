import React from 'react';

export interface SpokeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SpokeIcon = ({ size, ...props }: SpokeIconProps) => {
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
        d="M16.6667 7.29167C16.6667 9.59375 14.8021 11.4583 12.5 11.4583C10.1979 11.4583 8.33333 9.59375 8.33333 7.29167C8.33333 4.98958 10.1979 3.125 12.5 3.125C14.8021 3.125 16.6667 4.98958 16.6667 7.29167ZM7.29167 13.5417C4.98958 13.5417 3.125 15.4062 3.125 17.7083C3.125 20.0104 4.98958 21.875 7.29167 21.875C9.59375 21.875 11.4583 20.0104 11.4583 17.7083C11.4583 15.4062 9.59375 13.5417 7.29167 13.5417ZM17.7083 13.5417C15.4062 13.5417 13.5417 15.4062 13.5417 17.7083C13.5417 20.0104 15.4062 21.875 17.7083 21.875C20.0104 21.875 21.875 20.0104 21.875 17.7083C21.875 15.4062 20.0104 13.5417 17.7083 13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SpokeIcon;
