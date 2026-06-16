import React from 'react';

export interface BookmarkRemoveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BookmarkRemoveIcon = ({ size, ...props }: BookmarkRemoveIconProps) => {
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
      
<path d="M20.8334 7.29167H14.5834V5.20833H20.8334V7.29167ZM18.7501 11.3542C18.4167 11.4271 18.0626 11.4583 17.7084 11.4583C14.8334 11.4583 12.5001 9.125 12.5001 6.25C12.5001 5.07292 12.8855 4 13.5417 3.125H6.25008C5.10425 3.125 4.16675 4.0625 4.16675 5.20833V21.875L11.4584 18.75L18.7501 21.875V11.3542Z" fill="currentColor"/>
    </svg>
  );
};

export default BookmarkRemoveIcon;
