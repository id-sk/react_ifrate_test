import React from 'react';

export interface SpatialAudioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SpatialAudioIcon = ({ size, ...props }: SpatialAudioIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M9.89583 14.5834C12.197 14.5834 14.0625 12.7179 14.0625 10.4167C14.0625 8.11552 12.197 6.25004 9.89583 6.25004C7.59465 6.25004 5.72917 8.11552 5.72917 10.4167C5.72917 12.7179 7.59465 14.5834 9.89583 14.5834Z" fill="currentColor"/>
<path d="M16.5521 17.25C14.8021 16.3542 12.5312 15.625 9.89583 15.625C7.26042 15.625 4.98958 16.3542 3.23958 17.25C2.19792 17.7813 1.5625 18.8542 1.5625 20.0209V22.9167H18.2292V20.0209C18.2292 18.8542 17.5937 17.7813 16.5521 17.25Z" fill="currentColor"/>
<path d="M16.1458 2.08337H14.0625C14.0625 7.26046 18.2604 11.4584 23.4375 11.4584V9.37504C19.4167 9.37504 16.1458 6.10421 16.1458 2.08337Z" fill="currentColor"/>
<path d="M20.3125 2.08337H18.2292C18.2292 4.95837 20.5625 7.29171 23.4375 7.29171V5.20837C21.7188 5.20837 20.3125 3.80212 20.3125 2.08337Z" fill="currentColor"/>
    </svg>
  );
};

export default SpatialAudioIcon;
