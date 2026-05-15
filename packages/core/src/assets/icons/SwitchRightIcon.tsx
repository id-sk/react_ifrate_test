import React from 'react';

export interface SwitchRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchRightIcon = ({ size, ...props }: SwitchRightIconProps) => {
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
        d="M16.1458 16.021V8.97933L19.6667 12.5002L16.1458 16.021ZM14.5833 19.7918L21.875 12.5002L14.5833 5.2085V19.7918ZM10.4167 19.7918V5.2085L3.125 12.5002L10.4167 19.7918Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwitchRightIcon;
