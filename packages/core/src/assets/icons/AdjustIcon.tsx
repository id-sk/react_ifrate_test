import React from 'react';

export interface AdjustIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AdjustIcon = ({ size, ...props }: AdjustIconProps) => {
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
        d="M12.5 2.0835C6.76046 2.0835 2.08337 6.76058 2.08337 12.5002C2.08337 18.2397 6.76046 22.9168 12.5 22.9168C18.2396 22.9168 22.9167 18.2397 22.9167 12.5002C22.9167 6.76058 18.2396 2.0835 12.5 2.0835ZM12.5 20.8335C7.90629 20.8335 4.16671 17.0939 4.16671 12.5002C4.16671 7.90641 7.90629 4.16683 12.5 4.16683C17.0938 4.16683 20.8334 7.90641 20.8334 12.5002C20.8334 17.0939 17.0938 20.8335 12.5 20.8335ZM15.625 12.5002C15.625 14.2293 14.2292 15.6252 12.5 15.6252C10.7709 15.6252 9.37504 14.2293 9.37504 12.5002C9.37504 10.771 10.7709 9.37516 12.5 9.37516C14.2292 9.37516 15.625 10.771 15.625 12.5002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AdjustIcon;
