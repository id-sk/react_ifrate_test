import React from 'react';

export interface ImportContactsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ImportContactsIcon = ({ size, ...props }: ImportContactsIconProps) => {
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
      
<path d="M18.2292 3.64575C16.198 3.64575 14.0105 4.06242 12.5001 5.20825C10.9897 4.06242 8.80216 3.64575 6.77091 3.64575C4.73966 3.64575 2.55216 4.06242 1.04175 5.20825V20.4687C1.04175 21.1458 1.80216 20.9374 1.823 20.9374C3.22925 20.2603 5.2605 19.7916 6.77091 19.7916C8.80216 19.7916 10.9897 20.2083 12.5001 21.3541C13.9063 20.4687 16.4584 19.7916 18.2292 19.7916C19.948 19.7916 21.7188 20.1041 23.1772 20.8853C23.6042 21.1041 23.9584 20.6874 23.9584 20.4166V5.20825C22.4063 4.04159 20.1772 3.64575 18.2292 3.64575ZM21.8751 18.2291C20.7292 17.8645 19.4792 17.7083 18.2292 17.7083C16.4584 17.7083 13.9063 18.3853 12.5001 19.2708V7.29159C13.9063 6.40617 16.4584 5.72909 18.2292 5.72909C19.4792 5.72909 20.7292 5.88534 21.8751 6.24992V18.2291Z" fill="currentColor"/>
    </svg>
  );
};

export default ImportContactsIcon;
