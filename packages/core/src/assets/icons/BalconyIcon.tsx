import React from 'react';

export interface BalconyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BalconyIcon = ({ size, ...props }: BalconyIconProps) => {
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
      
<path d="M10.4167 10.4168V12.5002H8.33333V10.4168H10.4167ZM16.6667 12.5002V10.4168H14.5833V12.5002H16.6667ZM21.875 14.5835V22.9168H3.125V14.5835H4.16667V10.4168C4.16667 5.81266 7.89583 2.0835 12.5 2.0835C17.1042 2.0835 20.8333 5.81266 20.8333 10.4168V14.5835H21.875ZM7.29167 16.6668H5.20833V20.8335H7.29167V16.6668ZM11.4583 16.6668H9.375V20.8335H11.4583V16.6668ZM11.4583 4.25016C8.5 4.75016 6.25 7.32308 6.25 10.4168V14.5835H11.4583V4.25016ZM13.5417 14.5835H18.75V10.4168C18.75 7.32308 16.5 4.75016 13.5417 4.25016V14.5835ZM15.625 16.6668H13.5417V20.8335H15.625V16.6668ZM19.7917 16.6668H17.7083V20.8335H19.7917V16.6668Z" fill="currentColor"/>
    </svg>
  );
};

export default BalconyIcon;
