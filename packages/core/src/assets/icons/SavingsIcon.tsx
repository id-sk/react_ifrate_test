import React from 'react';

export interface SavingsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SavingsIcon = ({ size, ...props }: SavingsIconProps) => {
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
      
<path d="M20.6562 8.33329L18.2916 5.96871C18.3645 5.53121 18.4791 5.12496 18.6249 4.77079C18.7083 4.58329 18.7499 4.38538 18.7499 4.16663C18.7499 3.30204 18.052 2.60413 17.1874 2.60413C15.4791 2.60413 13.9687 3.42704 13.0208 4.68746H7.81242C4.64575 4.68746 2.08325 7.24996 2.08325 10.4166C2.08325 13.5833 4.68742 22.3958 4.68742 22.3958H10.4166V20.3125H12.4999V22.3958H18.2291L19.9791 16.5729L22.9166 15.5937V8.33329H20.6562ZM13.5416 9.89579H8.33325V7.81246H13.5416V9.89579ZM16.6666 11.9791C16.0937 11.9791 15.6249 11.5104 15.6249 10.9375C15.6249 10.3645 16.0937 9.89579 16.6666 9.89579C17.2395 9.89579 17.7083 10.3645 17.7083 10.9375C17.7083 11.5104 17.2395 11.9791 16.6666 11.9791Z" fill="currentColor"/>
    </svg>
  );
};

export default SavingsIcon;
