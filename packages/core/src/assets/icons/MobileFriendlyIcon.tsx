import React from 'react';

export interface MobileFriendlyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MobileFriendlyIcon = ({ size, ...props }: MobileFriendlyIconProps) => {
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
        d="M19.6926 1.04175H9.27596C8.13013 1.04175 7.19263 1.97925 7.19263 3.12508V6.25008H9.27596V4.16675H19.6926V20.8334H9.27596V18.7501H7.19263V21.8751C7.19263 23.0209 8.13013 23.9584 9.27596 23.9584H19.6926C20.8385 23.9584 21.776 23.0209 21.776 21.8751V3.12508C21.776 1.97925 20.8385 1.04175 19.6926 1.04175ZM7.20304 14.0313L4.54679 11.3751L3.22388 12.698L7.19263 16.6667L14.6822 9.17717L13.3593 7.85425L7.20304 14.0313Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MobileFriendlyIcon;
