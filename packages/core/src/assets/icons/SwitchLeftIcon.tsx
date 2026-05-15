import React from 'react';

export interface SwitchLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchLeftIcon = ({ size, ...props }: SwitchLeftIconProps) => {
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
        d="M8.85417 8.97933V16.021L5.33333 12.5002L8.85417 8.97933ZM10.4167 5.2085L3.125 12.5002L10.4167 19.7918V5.2085ZM14.5833 5.2085V19.7918L21.875 12.5002L14.5833 5.2085Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwitchLeftIcon;
