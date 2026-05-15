import React from 'react';

export interface PhotoCameraIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoCameraIcon = ({ size, ...props }: PhotoCameraIconProps) => {
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
        d="M12.4999 16.875C14.3409 16.875 15.8333 15.3826 15.8333 13.5417C15.8333 11.7007 14.3409 10.2083 12.4999 10.2083C10.659 10.2083 9.16659 11.7007 9.16659 13.5417C9.16659 15.3826 10.659 16.875 12.4999 16.875Z"
        fill="currentColor"
      />
      <path
        d="M9.37492 3.125L7.46867 5.20833H4.16659C3.02075 5.20833 2.08325 6.14583 2.08325 7.29167V19.7917C2.08325 20.9375 3.02075 21.875 4.16659 21.875H20.8333C21.9791 21.875 22.9166 20.9375 22.9166 19.7917V7.29167C22.9166 6.14583 21.9791 5.20833 20.8333 5.20833H17.5312L15.6249 3.125H9.37492ZM12.4999 18.75C9.62492 18.75 7.29159 16.4167 7.29159 13.5417C7.29159 10.6667 9.62492 8.33333 12.4999 8.33333C15.3749 8.33333 17.7083 10.6667 17.7083 13.5417C17.7083 16.4167 15.3749 18.75 12.4999 18.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PhotoCameraIcon;
