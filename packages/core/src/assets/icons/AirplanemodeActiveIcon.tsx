import React from 'react';

export interface AirplanemodeActiveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirplanemodeActiveIcon = ({ size, ...props }: AirplanemodeActiveIconProps) => {
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
        d="M22.9166 16.6666V14.5833L14.0624 9.37492V3.64575C14.0624 2.78117 13.3645 2.08325 12.4999 2.08325C11.6353 2.08325 10.9374 2.78117 10.9374 3.64575V9.37492L2.08325 14.5833V16.6666L10.9374 14.0624V19.7916L8.33325 21.3541V22.9166L12.4999 21.8749L16.6666 22.9166V21.3541L14.0624 19.7916V14.0624L22.9166 16.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AirplanemodeActiveIcon;
