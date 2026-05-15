import React from 'react';

export interface ImageNotSupportedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ImageNotSupportedIcon = ({ size, ...props }: ImageNotSupportedIconProps) => {
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
        d="M23.5469 22.0781L2.92188 1.45312L1.45312 2.92188L3.85938 5.33854V19.0573C3.85938 20.2031 4.79688 21.1406 5.94271 21.1406H19.6615L22.0677 23.5469L23.5469 22.0781ZM5.94271 18.0156L9.58854 13.3281L12.1927 16.4635L13.4115 14.8906L16.5365 18.0156H5.94271ZM22.6094 18.1927L6.80729 2.39063H20.526C21.6719 2.39063 22.6094 3.32813 22.6094 4.47396V18.1927Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ImageNotSupportedIcon;
