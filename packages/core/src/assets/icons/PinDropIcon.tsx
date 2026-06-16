import React from 'react';

export interface PinDropIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PinDropIcon = ({ size, ...props }: PinDropIconProps) => {
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
      
<path d="M18.7499 8.3335C18.7499 4.88558 15.9478 2.0835 12.4999 2.0835C9.052 2.0835 6.24992 4.88558 6.24992 8.3335C6.24992 13.021 12.4999 19.7918 12.4999 19.7918C12.4999 19.7918 18.7499 13.021 18.7499 8.3335ZM10.4166 8.3335C10.4166 7.18766 11.3541 6.25016 12.4999 6.25016C13.6458 6.25016 14.5833 7.18766 14.5833 8.3335C14.5833 9.47933 13.6562 10.4168 12.4999 10.4168C11.3541 10.4168 10.4166 9.47933 10.4166 8.3335ZM5.20825 20.8335V22.9168H19.7916V20.8335H5.20825Z" fill="currentColor"/>
    </svg>
  );
};

export default PinDropIcon;
