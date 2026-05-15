import React from 'react';

export interface CreditCardOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CreditCardOffIcon = ({ size, ...props }: CreditCardOffIconProps) => {
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
        d="M23.4949 22.0781L2.86987 1.45312L1.40112 2.92188L3.01571 4.53646C2.85946 4.82813 2.77612 5.16146 2.77612 5.51563L2.76571 18.0156C2.76571 19.1719 3.69279 20.099 4.84904 20.099H18.5678L22.0157 23.5469L23.4949 22.0781ZM4.84904 11.7656V7.59896H6.06779L10.2345 11.7656H4.84904ZM7.79696 3.43229H21.5157C22.672 3.43229 23.599 4.35938 23.599 5.51563V18.0156C23.599 18.3698 23.5157 18.7031 23.3595 18.9948L16.1303 11.7656H21.5157V7.59896H11.9636L7.79696 3.43229Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CreditCardOffIcon;
