import React from 'react';

export interface FormatTextdirectionLToRIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatTextdirectionLToRIcon = ({ size, ...props }: FormatTextdirectionLToRIconProps) => {
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
        d="M8.33329 10.4166V15.6249H10.4166V4.16659H12.5V15.6249H14.5833V4.16659H16.6666V2.08325H8.33329C6.03121 2.08325 4.16663 3.94784 4.16663 6.24992C4.16663 8.552 6.03121 10.4166 8.33329 10.4166ZM20.8333 18.7499L16.6666 14.5833V17.7083H4.16663V19.7916H16.6666V22.9166L20.8333 18.7499Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatTextdirectionLToRIcon;
