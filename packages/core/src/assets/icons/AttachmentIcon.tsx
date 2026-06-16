import React from 'react';

export interface AttachmentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AttachmentIcon = ({ size, ...props }: AttachmentIconProps) => {
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
      
<path d="M2.08325 12.4999C2.08325 9.33325 4.64575 6.77075 7.81242 6.77075H18.7499C21.052 6.77075 22.9166 8.63534 22.9166 10.9374C22.9166 13.2395 21.052 15.1041 18.7499 15.1041H9.89575C8.45825 15.1041 7.29159 13.9374 7.29159 12.4999C7.29159 11.0624 8.45825 9.89575 9.89575 9.89575H17.7083V11.9791H9.802C9.22909 11.9791 9.22909 13.0208 9.802 13.0208H18.7499C19.8958 13.0208 20.8333 12.0833 20.8333 10.9374C20.8333 9.79159 19.8958 8.85409 18.7499 8.85409H7.81242C5.802 8.85409 4.16659 10.4895 4.16659 12.4999C4.16659 14.5103 5.802 16.1458 7.81242 16.1458H17.7083V18.2291H7.81242C4.64575 18.2291 2.08325 15.6666 2.08325 12.4999Z" fill="currentColor"/>
    </svg>
  );
};

export default AttachmentIcon;
