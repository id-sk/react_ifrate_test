import React from 'react';

export interface LockOpenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LockOpenIcon = ({ size, ...props }: LockOpenIconProps) => {
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
      
<path d="M12.5001 18.2292C13.6459 18.2292 14.5834 17.2917 14.5834 16.1458C14.5834 15 13.6459 14.0625 12.5001 14.0625C11.3542 14.0625 10.4167 15 10.4167 16.1458C10.4167 17.2917 11.3542 18.2292 12.5001 18.2292ZM18.7501 8.85417H17.7084V6.77083C17.7084 3.89583 15.3751 1.5625 12.5001 1.5625C9.62508 1.5625 7.29175 3.89583 7.29175 6.77083H9.27091C9.27091 4.98958 10.7188 3.54167 12.5001 3.54167C14.2813 3.54167 15.7292 4.98958 15.7292 6.77083V8.85417H6.25008C5.10425 8.85417 4.16675 9.79167 4.16675 10.9375V21.3542C4.16675 22.5 5.10425 23.4375 6.25008 23.4375H18.7501C19.8959 23.4375 20.8334 22.5 20.8334 21.3542V10.9375C20.8334 9.79167 19.8959 8.85417 18.7501 8.85417ZM18.7501 21.3542H6.25008V10.9375H18.7501V21.3542Z" fill="currentColor"/>
    </svg>
  );
};

export default LockOpenIcon;
