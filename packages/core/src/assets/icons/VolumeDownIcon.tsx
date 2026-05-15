import React from 'react';

export interface VolumeDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VolumeDownIcon = ({ size, ...props }: VolumeDownIconProps) => {
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
        d="M19.5312 12.5C19.5312 10.6562 18.4688 9.07288 16.9271 8.30204V16.6875C18.4688 15.927 19.5312 14.3437 19.5312 12.5ZM5.46875 9.37496V15.625H9.63542L14.8438 20.8333V4.16663L9.63542 9.37496H5.46875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VolumeDownIcon;
