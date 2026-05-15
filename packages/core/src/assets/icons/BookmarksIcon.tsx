import React from 'react';

export interface BookmarksIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BookmarksIcon = ({ size, ...props }: BookmarksIconProps) => {
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
        d="M19.7917 18.75L21.875 19.7917V3.12502C21.875 1.97919 20.9375 1.04169 19.7917 1.04169H9.36458C8.21875 1.04169 7.29167 1.97919 7.29167 3.12502H17.7083C18.8542 3.12502 19.7917 4.06252 19.7917 5.20835V18.75ZM15.625 5.20835H5.20833C4.0625 5.20835 3.125 6.14585 3.125 7.29169V23.9584L10.4167 20.8334L17.7083 23.9584V7.29169C17.7083 6.14585 16.7708 5.20835 15.625 5.20835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BookmarksIcon;
