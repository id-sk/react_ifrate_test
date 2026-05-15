import React from 'react';

export interface EqualizerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EqualizerIcon = ({ size, ...props }: EqualizerIconProps) => {
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
        d="M10.4167 20.8333H14.5834V4.16663H10.4167V20.8333ZM4.16675 20.8333H8.33341V12.5H4.16675V20.8333ZM16.6667 9.37496V20.8333H20.8334V9.37496H16.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EqualizerIcon;
