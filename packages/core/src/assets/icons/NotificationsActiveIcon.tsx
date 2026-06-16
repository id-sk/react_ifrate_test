import React from 'react';

export interface NotificationsActiveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NotificationsActiveIcon = ({ size, ...props }: NotificationsActiveIconProps) => {
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
      
<path d="M14.5835 20.5732C14.5833 21.7189 13.6452 22.6562 12.4995 22.6562C11.3435 22.6561 10.4167 21.7188 10.4165 20.5732H14.5835ZM12.4995 2.34375C13.3425 2.34375 14.0244 3.0073 14.0581 3.8418C13.4946 4.70505 13.1665 5.73596 13.1665 6.84375C13.1665 9.88132 15.6289 12.3438 18.6665 12.3438C18.6942 12.3438 18.7219 12.3412 18.7495 12.3408V16.4062L20.8335 18.4893V19.5312H4.1665V18.4893L6.24951 16.4062V11.1982C6.24951 7.98999 7.94757 5.32268 10.937 4.61426V3.90625C10.937 3.04178 11.6351 2.34392 12.4995 2.34375Z" fill="currentColor"/>
<circle cx="18.5" cy="6.95117" r="4.5" fill="currentColor"/>
    </svg>
  );
};

export default NotificationsActiveIcon;
