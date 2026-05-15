import React from 'react';

export interface FormatColorTextIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatColorTextIcon = ({ size, ...props }: FormatColorTextIconProps) => {
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
        d="M2.08325 19.2708H22.9166V23.4375H2.08325V19.2708ZM5.71867 16.1458H8.2395L9.56242 12.4167H15.4478L16.7603 16.1458H19.2812L13.802 1.5625H11.1978L5.71867 16.1458ZM10.3228 10.3021L12.4374 4.27083H12.5624L14.677 10.3021H10.3228Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatColorTextIcon;
