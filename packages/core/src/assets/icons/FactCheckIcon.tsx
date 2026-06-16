import React from 'react';

export interface FactCheckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FactCheckIcon = ({ size, ...props }: FactCheckIconProps) => {
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
      
<path fillRule="evenodd" clipRule="evenodd" d="M20.8333 3.125H4.16659C3.02075 3.125 2.08325 4.0625 2.08325 5.20833V19.7917C2.08325 20.9375 3.02075 21.875 4.16659 21.875H20.8333C21.9791 21.875 22.9166 20.9375 22.9166 19.7917V5.20833C22.9166 4.0625 21.9791 3.125 20.8333 3.125ZM10.4166 17.7083H5.20825V15.625H10.4166V17.7083ZM10.4166 13.5417H5.20825V11.4583H10.4166V13.5417ZM10.4166 9.375H5.20825V7.29167H10.4166V9.375ZM15.4374 15.625L12.4999 12.6667L13.9687 11.1979L15.4374 12.6771L18.7395 9.375L20.2187 10.8542L15.4374 15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default FactCheckIcon;
