import React from 'react';

export interface TollIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TollIcon = ({ size, ...props }: TollIconProps) => {
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
      
<path d="M15.6251 4.16663C11.0209 4.16663 7.29175 7.89579 7.29175 12.5C7.29175 17.1041 11.0209 20.8333 15.6251 20.8333C20.2292 20.8333 23.9584 17.1041 23.9584 12.5C23.9584 7.89579 20.2292 4.16663 15.6251 4.16663ZM15.6251 18.75C12.1772 18.75 9.37508 15.9479 9.37508 12.5C9.37508 9.05204 12.1772 6.24996 15.6251 6.24996C19.073 6.24996 21.8751 9.05204 21.8751 12.5C21.8751 15.9479 19.073 18.75 15.6251 18.75Z" fill="currentColor"/>
<path d="M3.12508 12.5C3.12508 9.78121 4.86466 7.46871 7.29175 6.61454V4.43746C3.698 5.36454 1.04175 8.61454 1.04175 12.5C1.04175 16.3854 3.698 19.6354 7.29175 20.5625V18.3854C4.86466 17.5312 3.12508 15.2187 3.12508 12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default TollIcon;
