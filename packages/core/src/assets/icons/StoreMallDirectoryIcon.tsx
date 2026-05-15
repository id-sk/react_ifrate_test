import React from 'react';

export interface StoreMallDirectoryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StoreMallDirectoryIcon = ({ size, ...props }: StoreMallDirectoryIconProps) => {
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
        d="M20.8333 4.1665H4.16667V6.24984H20.8333V4.1665ZM21.875 14.5832V12.4998L20.8333 7.2915H4.16667L3.125 12.4998V14.5832H4.16667V20.8332H14.5833V14.5832H18.75V20.8332H20.8333V14.5832H21.875ZM12.5 18.7498H6.25V14.5832H12.5V18.7498Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StoreMallDirectoryIcon;
