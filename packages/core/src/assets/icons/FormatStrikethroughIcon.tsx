import React from 'react';

export interface FormatStrikethroughIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatStrikethroughIcon = ({ size, ...props }: FormatStrikethroughIconProps) => {
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
        d="M10.4167 20.3125H14.5833V17.1875H10.4167V20.3125ZM5.20833 4.6875V7.8125H10.4167V10.9375H14.5833V7.8125H19.7917V4.6875H5.20833ZM3.125 15.1042H21.875V13.0208H3.125V15.1042Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatStrikethroughIcon;
