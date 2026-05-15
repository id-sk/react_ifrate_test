import React from 'react';

export interface FormatUnderlinedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatUnderlinedIcon = ({ size, ...props }: FormatUnderlinedIconProps) => {
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
        d="M12.5 17.7083C15.948 17.7083 18.75 14.9062 18.75 11.4583V3.125H16.1459V11.4583C16.1459 13.4688 14.5105 15.1042 12.5 15.1042C10.4896 15.1042 8.85421 13.4688 8.85421 11.4583V3.125H6.25004V11.4583C6.25004 14.9062 9.05212 17.7083 12.5 17.7083ZM5.20837 19.7917V21.875H19.7917V19.7917H5.20837Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatUnderlinedIcon;
