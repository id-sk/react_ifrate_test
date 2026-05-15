import React from 'react';

export interface VolumeMuteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VolumeMuteIcon = ({ size, ...props }: VolumeMuteIconProps) => {
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
        d="M7.8125 9.37496V15.625H11.9792L17.1875 20.8333V4.16663L11.9792 9.37496H7.8125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VolumeMuteIcon;
