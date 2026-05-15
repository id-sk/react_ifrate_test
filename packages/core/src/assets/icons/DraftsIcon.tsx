import React from 'react';

export interface DraftsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DraftsIcon = ({ size, ...props }: DraftsIconProps) => {
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
        d="M22.9063 9.89591C22.9063 9.14591 22.5209 8.48966 21.9271 8.12508L12.5 2.60425L3.07296 8.12508C2.47921 8.48966 2.08337 9.14591 2.08337 9.89591V20.3126C2.08337 21.4584 3.02087 22.3959 4.16671 22.3959H20.8334C21.9792 22.3959 22.9167 21.4584 22.9167 20.3126L22.9063 9.89591ZM12.5 15.1042L3.89587 9.72925L12.5 4.68758L21.1042 9.72925L12.5 15.1042Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DraftsIcon;
