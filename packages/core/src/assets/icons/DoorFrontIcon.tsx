import React from 'react';

export interface DoorFrontIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoorFrontIcon = ({ size, ...props }: DoorFrontIconProps) => {
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
        d="M19.7917 19.7917V5.20833C19.7917 4.0625 18.8542 3.125 17.7083 3.125H7.29167C6.14583 3.125 5.20833 4.0625 5.20833 5.20833V19.7917H3.125V21.875H21.875V19.7917H19.7917ZM15.625 13.5417H13.5417V11.4583H15.625V13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoorFrontIcon;
