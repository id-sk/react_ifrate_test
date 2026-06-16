import React from 'react';

export interface AccountTreeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccountTreeIcon = ({ size, ...props }: AccountTreeIconProps) => {
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
      
<path d="M22.9166 11.4583V3.125H15.6249V6.25H9.37492V3.125H2.08325V11.4583H9.37492V8.33333H11.4583V18.75H15.6249V21.875H22.9166V13.5417H15.6249V16.6667H13.5416V8.33333H15.6249V11.4583H22.9166Z" fill="currentColor"/>
    </svg>
  );
};

export default AccountTreeIcon;
