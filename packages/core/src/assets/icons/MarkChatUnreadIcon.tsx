import React from 'react';

export interface MarkChatUnreadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MarkChatUnreadIcon = ({ size, ...props }: MarkChatUnreadIconProps) => {
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
      
<path d="M22.9166 8.31258V17.7084C22.9166 18.8542 21.9791 19.7917 20.8333 19.7917H6.24992L2.08325 23.9584V5.20841C2.08325 4.06258 3.02075 3.12508 4.16659 3.12508H14.6874C14.6249 3.45841 14.5833 3.81258 14.5833 4.16675C14.5833 7.04175 16.9166 9.37508 19.7916 9.37508C20.9687 9.37508 22.0416 8.96883 22.9166 8.31258ZM16.6666 4.16675C16.6666 5.89591 18.0624 7.29175 19.7916 7.29175C21.5208 7.29175 22.9166 5.89591 22.9166 4.16675C22.9166 2.43758 21.5208 1.04175 19.7916 1.04175C18.0624 1.04175 16.6666 2.43758 16.6666 4.16675Z" fill="currentColor"/>
    </svg>
  );
};

export default MarkChatUnreadIcon;
