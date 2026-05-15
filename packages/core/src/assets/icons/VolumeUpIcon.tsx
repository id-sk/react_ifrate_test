import React from 'react';

export interface VolumeUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VolumeUpIcon = ({ size, ...props }: VolumeUpIconProps) => {
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
        d="M3.125 9.37504V15.625H7.29167L12.5 20.8334V4.16671L7.29167 9.37504H3.125ZM17.1875 12.5C17.1875 10.6563 16.125 9.07296 14.5833 8.30212V16.6875C16.125 15.9271 17.1875 14.3438 17.1875 12.5ZM14.5833 3.36462V5.51046C17.5938 6.40629 19.7917 9.19796 19.7917 12.5C19.7917 15.8021 17.5938 18.5938 14.5833 19.4896V21.6355C18.7604 20.6875 21.875 16.9584 21.875 12.5C21.875 8.04171 18.7604 4.31254 14.5833 3.36462Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VolumeUpIcon;
