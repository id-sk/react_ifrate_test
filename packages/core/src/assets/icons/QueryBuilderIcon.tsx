import React from 'react';

export interface QueryBuilderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const QueryBuilderIcon = ({ size, ...props }: QueryBuilderIconProps) => {
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
      
<path d="M12.4895 2.08337C6.7395 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.7395 22.9167 12.4895 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4895 2.08337ZM12.4999 20.8334C7.89575 20.8334 4.16659 17.1042 4.16659 12.5C4.16659 7.89587 7.89575 4.16671 12.4999 4.16671C17.1041 4.16671 20.8333 7.89587 20.8333 12.5C20.8333 17.1042 17.1041 20.8334 12.4999 20.8334Z" fill="currentColor"/>
<path d="M13.0208 7.29171H11.4583V13.5417L16.927 16.823L17.7083 15.5417L13.0208 12.7605V7.29171Z" fill="currentColor"/>
    </svg>
  );
};

export default QueryBuilderIcon;
