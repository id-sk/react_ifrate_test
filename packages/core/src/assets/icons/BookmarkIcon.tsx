import React from 'react';

export interface BookmarkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BookmarkIcon = ({ size, ...props }: BookmarkIconProps) => {
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
        d="M17.7084 3.125H7.29171C6.14587 3.125 5.21879 4.0625 5.21879 5.20833L5.20837 21.875L12.5 18.75L19.7917 21.875V5.20833C19.7917 4.0625 18.8542 3.125 17.7084 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BookmarkIcon;
