import React from 'react';

export interface CodeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CodeIcon = ({ size, ...props }: CodeIconProps) => {
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
        d="M9.79171 17.2917L5.00004 12.5L9.79171 7.70833L8.33337 6.25L2.08337 12.5L8.33337 18.75L9.79171 17.2917ZM15.2084 17.2917L20 12.5L15.2084 7.70833L16.6667 6.25L22.9167 12.5L16.6667 18.75L15.2084 17.2917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CodeIcon;
