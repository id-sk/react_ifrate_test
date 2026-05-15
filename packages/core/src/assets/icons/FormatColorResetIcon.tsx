import React from 'react';

export interface FormatColorResetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatColorResetIcon = ({ size, ...props }: FormatColorResetIconProps) => {
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
        d="M18.8228 14.4114C18.8228 10.2447 12.5728 3.16138 12.5728 3.16138C12.5728 3.16138 11.1874 4.73429 9.72909 6.82804L18.677 15.776C18.7708 15.3385 18.8228 14.8801 18.8228 14.4114ZM5.56242 5.31763L4.2395 6.65096L7.69784 10.1093C6.89575 11.6197 6.32284 13.151 6.32284 14.4114C6.32284 17.8593 9.12492 20.6614 12.5728 20.6614C14.1562 20.6614 15.5937 20.0676 16.6978 19.0989L19.4374 21.8385L20.7603 20.5155L5.56242 5.31763Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatColorResetIcon;
