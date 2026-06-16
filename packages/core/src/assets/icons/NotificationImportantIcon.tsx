import React from 'react';

export interface NotificationImportantIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NotificationImportantIcon = ({ size, ...props }: NotificationImportantIconProps) => {
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
      
<path d="M18.7501 16.4062V11.1979C18.7501 8 17.0417 5.32292 14.0626 4.61458V3.90625C14.0626 3.04167 13.3647 2.34375 12.5001 2.34375C11.6355 2.34375 10.9376 3.04167 10.9376 3.90625V4.61458C7.948 5.32292 6.25008 7.98958 6.25008 11.1979V16.4062L4.16675 18.4896V19.5312H20.8334V18.4896L18.7501 16.4062ZM13.5417 16.4062H11.4584V14.3229H13.5417V16.4062ZM13.5417 12.2396H11.4584V8.07292H13.5417V12.2396ZM12.5001 22.6562C13.6459 22.6562 14.5834 21.7188 14.5834 20.5729H10.4167C10.4167 21.7188 11.3438 22.6562 12.5001 22.6562Z" fill="currentColor"/>
    </svg>
  );
};

export default NotificationImportantIcon;
