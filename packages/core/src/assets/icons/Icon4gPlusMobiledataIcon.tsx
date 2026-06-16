import React from 'react';

export interface Icon4gPlusMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon4gPlusMobiledataIcon = ({ size, ...props }: Icon4gPlusMobiledataIconProps) => {
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
      
<path d="M13.0208 11.4584V13.5417H15.1041V15.6251H10.9374V9.37508H17.1874C17.1874 8.22925 16.2499 7.29175 15.1041 7.29175H10.9374C9.79159 7.29175 8.85409 8.22925 8.85409 9.37508V15.6251C8.85409 16.7709 9.79159 17.7084 10.9374 17.7084H15.1041C16.2499 17.7084 17.1874 16.7709 17.1874 15.6251V11.4584H13.0208ZM24.4791 11.4584H22.3958V9.37508H20.3124V11.4584H18.2291V13.5417H20.3124V15.6251H22.3958V13.5417H24.4791V11.4584ZM6.77075 7.29175H4.68742V12.5001H2.60409V7.29175H0.520752V14.5834H4.68742V17.7084H6.77075V14.5834H7.81242V12.5001H6.77075V7.29175Z" fill="currentColor"/>
    </svg>
  );
};

export default Icon4gPlusMobiledataIcon;
