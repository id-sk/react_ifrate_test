import React from 'react';

export interface FormatAlignCenterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignCenterIcon = ({ size, ...props }: FormatAlignCenterIconProps) => {
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
        d="M7.29167 15.625V17.7083H17.7083V15.625H7.29167ZM3.125 21.875H21.875V19.7917H3.125V21.875ZM3.125 13.5417H21.875V11.4583H3.125V13.5417ZM7.29167 7.29167V9.375H17.7083V7.29167H7.29167ZM3.125 3.125V5.20833H21.875V3.125H3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatAlignCenterIcon;
