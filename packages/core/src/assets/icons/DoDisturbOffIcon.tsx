import React from 'react';

export interface DoDisturbOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoDisturbOffIcon = ({ size, ...props }: DoDisturbOffIconProps) => {
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
        d="M18.026 11.1406V13.224H16.8073L21.5052 17.9219C22.599 16.276 23.2344 14.3073 23.2344 12.1823C23.2344 6.43229 18.5677 1.76562 12.8177 1.76562C10.6927 1.76562 8.72396 2.40104 7.07812 3.49479L14.724 11.1406H18.026ZM1.76562 4.07812L4.13021 6.44271C3.03646 8.08854 2.40104 10.0573 2.40104 12.1823C2.40104 17.9323 7.06771 22.599 12.8177 22.599C14.9427 22.599 16.9115 21.9635 18.5573 20.8698L20.9219 23.2344L22.3906 21.7656L3.24479 2.60937L1.76562 4.07812ZM7.60938 11.1406H8.82812L10.9115 13.224H7.60938V11.1406Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoDisturbOffIcon;
