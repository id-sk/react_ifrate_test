import React from 'react';

export interface NextPlanIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NextPlanIcon = ({ size, ...props }: NextPlanIconProps) => {
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
      
<path d="M12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337ZM18.7499 14.5521H13.5416L15.8958 12.198C14.9478 11.0938 13.552 10.3855 11.9791 10.3855C9.51034 10.3855 7.44784 12.1146 6.91659 14.4271L5.91659 14.0938C6.58325 11.3646 9.04159 9.34379 11.9791 9.34379C13.8333 9.34379 15.4895 10.1667 16.6353 11.4584L18.7499 9.34379V14.5521Z" fill="currentColor"/>
    </svg>
  );
};

export default NextPlanIcon;
