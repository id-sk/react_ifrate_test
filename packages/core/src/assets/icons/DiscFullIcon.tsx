import React from 'react';

export interface DiscFullIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DiscFullIcon = ({ size, ...props }: DiscFullIconProps) => {
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
      
<path d="M20.8333 16.6665H22.9166V14.5832H20.8333V16.6665ZM20.8333 7.2915V12.4998H22.9166V7.2915H20.8333ZM10.4166 4.1665C5.81242 4.1665 2.08325 7.89567 2.08325 12.4998C2.08325 17.104 5.81242 20.8332 10.4166 20.8332C15.0208 20.8332 18.7499 17.104 18.7499 12.4998C18.7499 7.89567 15.0208 4.1665 10.4166 4.1665ZM10.4166 14.5832C9.27075 14.5832 8.33325 13.6457 8.33325 12.4998C8.33325 11.354 9.27075 10.4165 10.4166 10.4165C11.5624 10.4165 12.4999 11.354 12.4999 12.4998C12.4999 13.6457 11.5624 14.5832 10.4166 14.5832Z" fill="currentColor"/>
    </svg>
  );
};

export default DiscFullIcon;
