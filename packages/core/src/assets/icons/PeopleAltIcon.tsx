import React from 'react';

export interface PeopleAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PeopleAltIcon = ({ size, ...props }: PeopleAltIconProps) => {
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
      
<path fillRule="evenodd" clipRule="evenodd" d="M17.3647 13.6769C18.7917 14.6457 19.7917 15.9582 19.7917 17.7082V20.8332H23.9584V17.7082C23.9584 15.4373 20.2397 14.0936 17.3647 13.6769Z" fill="currentColor"/>
<path d="M9.37508 12.4998C11.6763 12.4998 13.5417 10.6344 13.5417 8.33317C13.5417 6.03198 11.6763 4.1665 9.37508 4.1665C7.07389 4.1665 5.20841 6.03198 5.20841 8.33317C5.20841 10.6344 7.07389 12.4998 9.37508 12.4998Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.6251 12.4998C17.9272 12.4998 19.7917 10.6353 19.7917 8.33317C19.7917 6.03109 17.9272 4.1665 15.6251 4.1665C15.1355 4.1665 14.6772 4.27067 14.2397 4.4165C15.1042 5.48942 15.6251 6.854 15.6251 8.33317C15.6251 9.81234 15.1042 11.1769 14.2397 12.2498C14.6772 12.3957 15.1355 12.4998 15.6251 12.4998Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.37508 13.5415C6.59383 13.5415 1.04175 14.9373 1.04175 17.7082V20.8332H17.7084V17.7082C17.7084 14.9373 12.1563 13.5415 9.37508 13.5415Z" fill="currentColor"/>
    </svg>
  );
};

export default PeopleAltIcon;
