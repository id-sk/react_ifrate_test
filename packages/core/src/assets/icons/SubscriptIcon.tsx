import React from 'react';

export interface SubscriptIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SubscriptIcon = ({ size, ...props }: SubscriptIconProps) => {
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
      
<path d="M20.3749 18.7501H18.2916V19.7917H21.4166V20.8334H17.2499V18.7501C17.2499 18.1772 17.7187 17.7084 18.2916 17.7084H20.3749V16.6667H17.2499V15.6251H20.3749C20.9478 15.6251 21.4166 16.0938 21.4166 16.6667V17.7084C21.4166 18.2813 20.9478 18.7501 20.3749 18.7501ZM3.58325 18.7501H6.35408L9.89575 13.1042H10.0208L13.5624 18.7501H16.3333L11.4895 11.1772L16.0103 4.16675H13.2187L10.0208 9.36466H9.89575L6.677 4.16675H3.90617L8.40617 11.1772L3.58325 18.7501Z" fill="currentColor"/>
    </svg>
  );
};

export default SubscriptIcon;
