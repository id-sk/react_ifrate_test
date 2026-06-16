import React from 'react';

export interface Icon18UpRatingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon18UpRatingIcon = ({ size, ...props }: Icon18UpRatingIconProps) => {
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
      
<path d="M15.1042 13.0208H13.5417V14.5833H15.1042V13.0208Z" fill="currentColor"/>
<path d="M15.1042 10.4167H13.5417V11.9792H15.1042V10.4167Z" fill="currentColor"/>
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM10.4167 15.625H8.85417V10.9375H7.29167V9.375H10.4167V15.625ZM16.6667 14.5833C16.6667 15.1562 16.1979 15.625 15.625 15.625H13.0208C12.4479 15.625 11.9792 15.1562 11.9792 14.5833V10.4167C11.9792 9.84375 12.4479 9.375 13.0208 9.375H15.625C16.1979 9.375 16.6667 9.84375 16.6667 10.4167V14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default Icon18UpRatingIcon;
