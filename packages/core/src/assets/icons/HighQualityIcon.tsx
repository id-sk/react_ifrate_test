import React from 'react';

export interface HighQualityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HighQualityIcon = ({ size, ...props }: HighQualityIconProps) => {
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
      
<path d="M19.7917 4.16663H5.20833C4.05208 4.16663 3.125 5.10413 3.125 6.24996V18.75C3.125 19.8958 4.05208 20.8333 5.20833 20.8333H19.7917C20.9375 20.8333 21.875 19.8958 21.875 18.75V6.24996C21.875 5.10413 20.9375 4.16663 19.7917 4.16663ZM11.4583 15.625H9.89583V13.5416H7.8125V15.625H6.25V9.37496H7.8125V11.9791H9.89583V9.37496H11.4583V15.625ZM18.75 14.5833C18.75 15.1562 18.2812 15.625 17.7083 15.625H16.9271V17.1875H15.3646V15.625H14.5833C14.0104 15.625 13.5417 15.1562 13.5417 14.5833V10.4166C13.5417 9.84371 14.0104 9.37496 14.5833 9.37496H17.7083C18.2812 9.37496 18.75 9.84371 18.75 10.4166V14.5833ZM15.1042 14.0625H17.1875V10.9375H15.1042V14.0625Z" fill="currentColor"/>
    </svg>
  );
};

export default HighQualityIcon;
