import React from 'react';

export interface RawOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RawOffIcon = ({ size, ...props }: RawOffIconProps) => {
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
        d="M18.453 14.1771L19.0676 11.7188L19.8593 14.8854H21.401L22.9635 8.63542H21.401L20.6301 11.7604L19.8593 8.63542H18.276L17.5051 11.7604L16.7343 8.63542H15.1718L15.9218 11.6563L18.453 14.1771Z"
        fill="currentColor"
      />
      <path
        d="M2.03638 3.65625L7.01554 8.63542H3.71346V14.8854H5.27596V12.8021H6.42179L7.35929 14.8854H8.92179L7.98429 12.6979C8.50513 12.3854 8.92179 11.8646 8.92179 11.2396V10.5417L10.4114 12.0313L9.70304 14.8854H11.2655L11.6614 13.3229H11.703L21.1926 22.8125L22.6614 21.3438L3.51554 2.1875L2.03638 3.65625ZM7.35929 11.2396H5.27596V10.1979H7.35929V11.2396Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RawOffIcon;
