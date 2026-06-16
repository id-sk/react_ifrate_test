import React from 'react';

export interface PinEndIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PinEndIcon = ({ size, ...props }: PinEndIconProps) => {
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
      
<path d="M20.8333 12.5V6.24996H4.16659V18.75H14.5833V20.8333H4.16659C3.02075 20.8333 2.08325 19.8958 2.08325 18.75V6.24996C2.08325 5.10413 3.02075 4.16663 4.16659 4.16663H20.8333C21.9791 4.16663 22.9166 5.10413 22.9166 6.24996V12.5H20.8333ZM19.7916 14.5833C18.0624 14.5833 16.6666 15.9791 16.6666 17.7083C16.6666 19.4375 18.0624 20.8333 19.7916 20.8333C21.5208 20.8333 22.9166 19.4375 22.9166 17.7083C22.9166 15.9791 21.5208 14.5833 19.7916 14.5833ZM15.2708 8.33329H9.37492V14.2291L11.5833 12.0208L14.5312 14.9687L15.9999 13.5L13.052 10.552L15.2708 8.33329Z" fill="currentColor"/>
    </svg>
  );
};

export default PinEndIcon;
