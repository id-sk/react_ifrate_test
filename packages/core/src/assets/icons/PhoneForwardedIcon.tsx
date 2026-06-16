import React from 'react';

export interface PhoneForwardedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhoneForwardedIcon = ({ size, ...props }: PhoneForwardedIconProps) => {
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
      
<path d="M17.7083 12.5002L22.9166 7.29183L17.7083 2.0835V5.2085H13.5416V9.37516H17.7083V12.5002ZM19.7916 17.1877C18.4895 17.1877 17.2395 16.9793 16.0728 16.5939C15.7083 16.4793 15.302 16.5627 15.0103 16.8439L12.7187 19.1356C9.77075 17.6356 7.35409 15.2293 5.85409 12.271L8.14575 9.96891C8.43742 9.69808 8.52075 9.29183 8.40617 8.92725C8.02075 7.76058 7.81242 6.51058 7.81242 5.2085C7.81242 4.63558 7.34367 4.16683 6.77075 4.16683H3.12492C2.552 4.16683 2.08325 4.63558 2.08325 5.2085C2.08325 14.9897 10.0103 22.9168 19.7916 22.9168C20.3645 22.9168 20.8333 22.4481 20.8333 21.8752V18.2293C20.8333 17.6564 20.3645 17.1877 19.7916 17.1877Z" fill="currentColor"/>
    </svg>
  );
};

export default PhoneForwardedIcon;
