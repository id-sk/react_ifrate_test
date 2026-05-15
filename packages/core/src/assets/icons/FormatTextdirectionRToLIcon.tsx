import React from 'react';

export interface FormatTextdirectionRToLIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatTextdirectionRToLIcon = ({ size, ...props }: FormatTextdirectionRToLIconProps) => {
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
        d="M10.4166 10.4166V15.6249H12.5V4.16659H14.5833V15.6249H16.6666V4.16659H18.75V2.08325H10.4166C8.11454 2.08325 6.24996 3.94784 6.24996 6.24992C6.24996 8.552 8.11454 10.4166 10.4166 10.4166ZM8.33329 17.7083V14.5833L4.16663 18.7499L8.33329 22.9166V19.7916H20.8333V17.7083H8.33329Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatTextdirectionRToLIcon;
