import React from 'react';

export interface FolderZipIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderZipIcon = ({ size, ...props }: FolderZipIconProps) => {
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
        d="M20.8333 6.25008H12.4999L10.4166 4.16675H4.16659C3.02075 4.16675 2.09367 5.10425 2.09367 6.25008L2.08325 18.7501C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.7501V8.33341C22.9166 7.18758 21.9791 6.25008 20.8333 6.25008ZM18.7499 12.5001H16.6666V14.5834H18.7499V16.6667H16.6666V18.7501H14.5833V16.6667H16.6666V14.5834H14.5833V12.5001H16.6666V10.4167H14.5833V8.33341H16.6666V10.4167H18.7499V12.5001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FolderZipIcon;
