import React from 'react';

export interface VideoStableIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VideoStableIcon = ({ size, ...props }: VideoStableIconProps) => {
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
        d="M20.8333 4.1665H4.16659C3.02075 4.1665 2.08325 5.104 2.08325 6.24984V18.7498C2.08325 19.8957 3.02075 20.8332 4.16659 20.8332H20.8333C21.9791 20.8332 22.9166 19.8957 22.9166 18.7498V6.24984C22.9166 5.104 21.9791 4.1665 20.8333 4.1665ZM4.16659 18.7498V6.24984H7.2395L4.81242 15.3436L17.5208 18.7498H4.16659ZM20.8333 18.7498H17.7603L20.1978 9.65609L7.47909 6.24984H20.8333V18.7498Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VideoStableIcon;
