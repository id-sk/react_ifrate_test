import React from 'react';

export interface PhotoSizeSelectActualIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoSizeSelectActualIcon = ({ size, ...props }: PhotoSizeSelectActualIconProps) => {
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
        d="M21.875 3.125H3.12496C2.08329 3.125 1.04163 4.16667 1.04163 5.20833V19.7917C1.04163 20.9375 1.97913 21.875 3.12496 21.875H21.875C22.9166 21.875 23.9583 20.8333 23.9583 19.7917V5.20833C23.9583 4.16667 22.9166 3.125 21.875 3.125ZM5.20829 17.7083L8.85413 13.0208L11.4583 16.1562L15.1041 11.4583L19.7916 17.7083H5.20829Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PhotoSizeSelectActualIcon;
