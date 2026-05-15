import React from 'react';

export interface FolderSharedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderSharedIcon = ({ size, ...props }: FolderSharedIconProps) => {
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
        d="M20.8333 6.25008H12.4999L10.4166 4.16675H4.16659C3.02075 4.16675 2.09367 5.10425 2.09367 6.25008L2.08325 18.7501C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.7501V8.33341C22.9166 7.18758 21.9791 6.25008 20.8333 6.25008ZM15.6249 9.37508C16.7708 9.37508 17.7083 10.3126 17.7083 11.4584C17.7083 12.6042 16.7708 13.5417 15.6249 13.5417C14.4791 13.5417 13.5416 12.6042 13.5416 11.4584C13.5416 10.3126 14.4791 9.37508 15.6249 9.37508ZM19.7916 17.7084H11.4583V16.6667C11.4583 15.2813 14.2395 14.5834 15.6249 14.5834C17.0103 14.5834 19.7916 15.2813 19.7916 16.6667V17.7084Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FolderSharedIcon;
