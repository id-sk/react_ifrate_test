import React from 'react';

export interface BrandingWatermarkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BrandingWatermarkIcon = ({ size, ...props }: BrandingWatermarkIconProps) => {
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
        d="M21.875 3.125H3.12496C1.97913 3.125 1.04163 4.0625 1.04163 5.20833V19.7917C1.04163 20.9375 1.97913 21.875 3.12496 21.875H21.875C23.0208 21.875 23.9583 20.9375 23.9583 19.7917V5.20833C23.9583 4.0625 23.0208 3.125 21.875 3.125ZM21.875 19.7917H12.5V13.5417H21.875V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrandingWatermarkIcon;
