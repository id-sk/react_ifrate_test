import React from 'react';

export interface HdIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HdIcon = ({ size, ...props }: HdIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.05208 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.05208 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM11.4583 15.625H9.89583V13.5417H7.8125V15.625H6.25V9.375H7.8125V11.9792H9.89583V9.375H11.4583V15.625ZM13.5417 9.375H17.7083C18.2812 9.375 18.75 9.84375 18.75 10.4167V14.5833C18.75 15.1562 18.2812 15.625 17.7083 15.625H13.5417V9.375ZM15.1042 14.0625H17.1875V10.9375H15.1042V14.0625Z" fill="currentColor"/>
    </svg>
  );
};

export default HdIcon;
