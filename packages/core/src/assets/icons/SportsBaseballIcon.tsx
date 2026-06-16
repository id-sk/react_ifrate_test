import React from 'react';

export interface SportsBaseballIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SportsBaseballIcon = ({ size, ...props }: SportsBaseballIconProps) => {
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
      
<path d="M3.96867 6.54183C2.78117 8.22933 2.08325 10.2814 2.08325 12.5002C2.08325 14.7189 2.78117 16.771 3.96867 18.4585C6.4895 17.6564 8.33325 15.2918 8.33325 12.5002C8.33325 9.7085 6.4895 7.34391 3.96867 6.54183Z" fill="currentColor"/>
<path d="M21.0312 6.54183C18.5103 7.34391 16.6666 9.7085 16.6666 12.5002C16.6666 15.2918 18.5103 17.6564 21.0312 18.4585C22.2187 16.771 22.9166 14.7189 22.9166 12.5002C22.9166 10.2814 22.2187 8.22933 21.0312 6.54183Z" fill="currentColor"/>
<path d="M14.5833 12.5002C14.5833 9.0835 16.6353 6.15641 19.5728 4.86475C17.7187 3.146 15.2395 2.0835 12.4999 2.0835C9.76034 2.0835 7.28117 3.146 5.427 4.86475C8.3645 6.15641 10.4166 9.0835 10.4166 12.5002C10.4166 15.9168 8.3645 18.8439 5.427 20.1356C7.28117 21.8543 9.76034 22.9168 12.4999 22.9168C15.2395 22.9168 17.7187 21.8543 19.5728 20.1356C16.6353 18.8439 14.5833 15.9168 14.5833 12.5002Z" fill="currentColor"/>
    </svg>
  );
};

export default SportsBaseballIcon;
