import React from 'react';

export interface DehazeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DehazeIcon = ({ size, ...props }: DehazeIconProps) => {
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
        d="M2.08325 16.6667V18.75H22.9166V16.6667H2.08325ZM2.08325 11.4583V13.5417H22.9166V11.4583H2.08325ZM2.08325 6.25V8.33333H22.9166V6.25H2.08325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DehazeIcon;
