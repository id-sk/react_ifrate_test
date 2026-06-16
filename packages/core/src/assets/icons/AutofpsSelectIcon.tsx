import React from 'react';

export interface AutofpsSelectIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AutofpsSelectIcon = ({ size, ...props }: AutofpsSelectIconProps) => {
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
      
<path d="M12.5312 6.0415H12.4688L11.4062 9.05192H13.5938L12.5312 6.0415Z" fill="currentColor"/>
<path d="M5.20833 17.1873H3.125V22.3957H5.20833V17.1873Z" fill="currentColor"/>
<path d="M12.5 15.104C15.9479 15.104 18.75 12.3019 18.75 8.854C18.75 5.40609 15.9479 2.604 12.5 2.604C9.05208 2.604 6.25 5.40609 6.25 8.854C6.25 12.3019 9.05208 15.104 12.5 15.104ZM11.8438 4.68734H13.1458L15.8854 11.979H14.625L13.9687 10.1144H11.0208L10.375 11.979H9.10417L11.8438 4.68734Z" fill="currentColor"/>
<path d="M9.375 17.1873H7.29167V22.3957H9.375V17.1873Z" fill="currentColor"/>
<path d="M13.5417 17.1873H11.4583V22.3957H13.5417V17.1873Z" fill="currentColor"/>
<path d="M21.875 17.1873H15.625V22.3957H21.875V17.1873Z" fill="currentColor"/>
    </svg>
  );
};

export default AutofpsSelectIcon;
