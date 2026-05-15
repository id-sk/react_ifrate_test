import React from 'react';

export interface SouthEastIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SouthEastIcon = ({ size, ...props }: SouthEastIconProps) => {
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
        d="M20.3125 9.89583H18.2292V16.7604L6.15625 4.6875L4.6875 6.15625L16.7604 18.2292H9.89583V20.3125H20.3125V9.89583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SouthEastIcon;
