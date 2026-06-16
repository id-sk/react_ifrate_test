import React from 'react';

export interface PhoneAndroidIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhoneAndroidIcon = ({ size, ...props }: PhoneAndroidIconProps) => {
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
      
<path d="M16.6666 1.04175H8.33325C6.60409 1.04175 5.20825 2.43758 5.20825 4.16675V20.8334C5.20825 22.5626 6.60409 23.9584 8.33325 23.9584H16.6666C18.3958 23.9584 19.7916 22.5626 19.7916 20.8334V4.16675C19.7916 2.43758 18.3958 1.04175 16.6666 1.04175ZM14.5833 21.8751H10.4166V20.8334H14.5833V21.8751ZM17.9687 18.7501H7.03117V4.16675H17.9687V18.7501Z" fill="currentColor"/>
    </svg>
  );
};

export default PhoneAndroidIcon;
