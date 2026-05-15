import React from 'react';

export interface ManIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ManIcon = ({ size, ...props }: ManIconProps) => {
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
        d="M14.5834 7.29183H10.4167C9.27087 7.29183 8.33337 8.22933 8.33337 9.37516V15.6252H10.4167V22.9168H14.5834V15.6252H16.6667V9.37516C16.6667 8.22933 15.7292 7.29183 14.5834 7.29183Z"
        fill="currentColor"
      />
      <path
        d="M12.5 6.25016C13.6506 6.25016 14.5834 5.31742 14.5834 4.16683C14.5834 3.01624 13.6506 2.0835 12.5 2.0835C11.3494 2.0835 10.4167 3.01624 10.4167 4.16683C10.4167 5.31742 11.3494 6.25016 12.5 6.25016Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ManIcon;
