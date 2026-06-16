import React from 'react';

export interface FileCopyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FileCopyIcon = ({ size, ...props }: FileCopyIconProps) => {
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
      
<path d="M17.1875 1.04175H4.68746C3.54163 1.04175 2.60413 1.97925 2.60413 3.12508V17.7084H4.68746V3.12508H17.1875V1.04175ZM16.1458 5.20841L22.3958 11.4584V21.8751C22.3958 23.0209 21.4583 23.9584 20.3125 23.9584H8.84371C7.69788 23.9584 6.77079 23.0209 6.77079 21.8751L6.78121 7.29175C6.78121 6.14591 7.70829 5.20841 8.85413 5.20841H16.1458ZM15.1041 12.5001H20.8333L15.1041 6.77091V12.5001Z" fill="currentColor"/>
    </svg>
  );
};

export default FileCopyIcon;
