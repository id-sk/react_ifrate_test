import React from 'react';

export interface BookmarkAddedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BookmarkAddedIcon = ({ size, ...props }: BookmarkAddedIconProps) => {
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
        d="M17.8281 22.0677L10.5364 18.9427L3.24475 22.0677V5.40106C3.24475 4.25523 4.18225 3.31773 5.32808 3.31773H12.6198C11.9635 4.19273 11.5781 5.26565 11.5781 6.44273C11.5781 9.31773 13.9114 11.6511 16.7864 11.6511C17.1406 11.6511 17.4948 11.6198 17.8281 11.5469V22.0677ZM16.6093 9.56773L13.6614 6.61981L15.1302 5.15106L16.5989 6.61981L20.2864 2.93231L21.7552 4.40106L16.6093 9.56773Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BookmarkAddedIcon;
