import React from 'react';

export interface AcUnitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AcUnitIcon = ({ size, ...props }: AcUnitIconProps) => {
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
      
<path d="M22.9166 11.4585H18.5728L21.9478 8.0835L20.4791 6.60433L15.6249 11.4585H13.5416V9.37516L18.3958 4.521L16.9166 3.05225L13.5416 6.42725V2.0835H11.4583V6.42725L8.08325 3.05225L6.60409 4.521L11.4583 9.37516V11.4585H9.37492L4.52075 6.60433L3.052 8.0835L6.427 11.4585H2.08325V13.5418H6.427L3.052 16.9168L4.52075 18.396L9.37492 13.5418H11.4583V15.6252L6.60409 20.4793L8.08325 21.9481L11.4583 18.5731V22.9168H13.5416V18.5731L16.9166 21.9481L18.3958 20.4793L13.5416 15.6252V13.5418H15.6249L20.4791 18.396L21.9478 16.9168L18.5728 13.5418H22.9166V11.4585Z" fill="currentColor"/>
    </svg>
  );
};

export default AcUnitIcon;
