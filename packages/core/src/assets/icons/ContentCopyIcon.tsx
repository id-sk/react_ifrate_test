import React from 'react';

export interface ContentCopyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ContentCopyIcon = ({ size, ...props }: ContentCopyIconProps) => {
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
      
<path d="M17.1876 1.04175H4.68758C3.54175 1.04175 2.60425 1.97925 2.60425 3.12508V17.7084H4.68758V3.12508H17.1876V1.04175ZM20.3126 5.20841H8.85425C7.70841 5.20841 6.77091 6.14591 6.77091 7.29175V21.8751C6.77091 23.0209 7.70841 23.9584 8.85425 23.9584H20.3126C21.4584 23.9584 22.3959 23.0209 22.3959 21.8751V7.29175C22.3959 6.14591 21.4584 5.20841 20.3126 5.20841ZM20.3126 21.8751H8.85425V7.29175H20.3126V21.8751Z" fill="currentColor"/>
    </svg>
  );
};

export default ContentCopyIcon;
