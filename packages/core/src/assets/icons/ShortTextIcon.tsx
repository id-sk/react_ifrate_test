import React from 'react';

export interface ShortTextIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShortTextIcon = ({ size, ...props }: ShortTextIconProps) => {
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
        d="M4.16675 9.375H20.8334V11.4583H4.16675V9.375ZM4.16675 13.5417H14.5834V15.625H4.16675V13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ShortTextIcon;
