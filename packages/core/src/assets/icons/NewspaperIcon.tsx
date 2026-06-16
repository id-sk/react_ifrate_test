import React from 'react';

export interface NewspaperIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NewspaperIcon = ({ size, ...props }: NewspaperIconProps) => {
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
      
<path d="M22.9166 3.125L21.177 4.86458L19.4478 3.125L17.7083 4.86458L15.9687 3.125L14.2395 4.86458L12.4999 3.125L10.7603 4.86458L9.03117 3.125L7.29159 4.86458L5.552 3.125L3.82284 4.86458L2.08325 3.125V19.7917C2.08325 20.9375 3.02075 21.875 4.16659 21.875H20.8333C21.9791 21.875 22.9166 20.9375 22.9166 19.7917V3.125ZM11.4583 19.7917H4.16659V13.5417H11.4583V19.7917ZM20.8333 19.7917H13.5416V17.7083H20.8333V19.7917ZM20.8333 15.625H13.5416V13.5417H20.8333V15.625ZM20.8333 11.4583H4.16659V8.33333H20.8333V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default NewspaperIcon;
