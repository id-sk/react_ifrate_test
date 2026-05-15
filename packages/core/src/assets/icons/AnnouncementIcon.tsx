import React from 'react';

export interface AnnouncementIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AnnouncementIcon = ({ size, ...props }: AnnouncementIconProps) => {
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
        d="M20.8334 2.08331H4.16671C3.02087 2.08331 2.09379 3.02081 2.09379 4.16665L2.08337 22.9166L6.25004 18.75H20.8334C21.9792 18.75 22.9167 17.8125 22.9167 16.6666V4.16665C22.9167 3.02081 21.9792 2.08331 20.8334 2.08331ZM13.5417 11.4583H11.4584V5.20831H13.5417V11.4583ZM13.5417 15.625H11.4584V13.5416H13.5417V15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AnnouncementIcon;
