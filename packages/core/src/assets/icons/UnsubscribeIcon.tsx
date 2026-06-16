import React from 'react';

export interface UnsubscribeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnsubscribeIcon = ({ size, ...props }: UnsubscribeIconProps) => {
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
      
<path d="M18.7501 14.0624C16.7397 14.0624 15.1042 15.6978 15.1042 17.7083C15.1042 19.7187 16.7397 21.3541 18.7501 21.3541C20.7605 21.3541 22.3959 19.7187 22.3959 17.7083C22.3959 15.6978 20.7605 14.0624 18.7501 14.0624ZM20.8334 18.2291H16.6667V17.1874H20.8334V18.2291ZM13.5938 18.2291C13.573 18.052 13.5417 17.8853 13.5417 17.7083C13.5417 14.8333 15.8751 12.4999 18.7501 12.4999C19.7084 12.4999 20.5834 12.7708 21.3542 13.2187V5.72909C21.3542 4.58325 20.4167 3.64575 19.2709 3.64575H4.68758C3.54175 3.64575 2.60425 4.58325 2.60425 5.72909V16.1458C2.60425 17.2916 3.54175 18.2291 4.68758 18.2291H13.5938ZM11.9792 11.4583L4.68758 7.81242V5.72909L11.9792 9.37492L19.2709 5.72909V7.81242L11.9792 11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default UnsubscribeIcon;
