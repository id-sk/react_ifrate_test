import React from 'react';

export interface TableRowsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TableRowsIcon = ({ size, ...props }: TableRowsIconProps) => {
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
        d="M21.875 8.33341H3.125V4.16675H21.875V8.33341ZM21.875 10.4167H3.125V14.5834H21.875V10.4167ZM21.875 16.6667H3.125V20.8334H21.875V16.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TableRowsIcon;
