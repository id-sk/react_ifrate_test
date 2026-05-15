import React from 'react';

export interface BookmarkAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BookmarkAddIcon = ({ size, ...props }: BookmarkAddIconProps) => {
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
        d="M20.8333 7.29167H18.75V9.375H16.6666V7.29167H14.5833V5.20833H16.6666V3.125H18.75V5.20833H20.8333V7.29167ZM18.75 21.875L11.4583 18.75L4.16663 21.875V5.20833C4.16663 4.0625 5.10413 3.125 6.24996 3.125H13.5416C12.8854 4 12.5 5.07292 12.5 6.25C12.5 9.125 14.8333 11.4583 17.7083 11.4583C18.0625 11.4583 18.4166 11.4271 18.75 11.3542V21.875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BookmarkAddIcon;
