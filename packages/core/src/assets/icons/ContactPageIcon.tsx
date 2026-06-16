import React from 'react';

export interface ContactPageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ContactPageIcon = ({ size, ...props }: ContactPageIconProps) => {
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
      
<path d="M14.5834 2.08331H6.25008C5.10425 2.08331 4.16675 3.02081 4.16675 4.16665V20.8333C4.16675 21.9791 5.10425 22.9166 6.25008 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V8.33331L14.5834 2.08331ZM12.5001 10.4166C13.6459 10.4166 14.5834 11.3541 14.5834 12.5C14.5834 13.6458 13.6459 14.5833 12.5001 14.5833C11.3542 14.5833 10.4167 13.6458 10.4167 12.5C10.4167 11.3541 11.3542 10.4166 12.5001 10.4166ZM16.6667 18.75H8.33341V18.1562C8.33341 17.3125 8.83342 16.5625 9.60425 16.2291C10.4897 15.8437 11.4688 15.625 12.5001 15.625C13.5313 15.625 14.5105 15.8437 15.3959 16.2291C16.1667 16.5625 16.6667 17.3125 16.6667 18.1562V18.75Z" fill="currentColor"/>
    </svg>
  );
};

export default ContactPageIcon;
