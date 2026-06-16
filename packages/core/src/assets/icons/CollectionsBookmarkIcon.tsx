import React from 'react';

export interface CollectionsBookmarkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CollectionsBookmarkIcon = ({ size, ...props }: CollectionsBookmarkIconProps) => {
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
      
<path d="M4.16659 6.25016H2.08325V20.8335C2.08325 21.9793 3.02075 22.9168 4.16659 22.9168H18.7499V20.8335H4.16659V6.25016Z" fill="currentColor"/>
<path d="M20.8333 2.0835H8.33325C7.18742 2.0835 6.24992 3.021 6.24992 4.16683V16.6668C6.24992 17.8127 7.18742 18.7502 8.33325 18.7502H20.8333C21.9791 18.7502 22.9166 17.8127 22.9166 16.6668V4.16683C22.9166 3.021 21.9791 2.0835 20.8333 2.0835ZM20.8333 12.5002L18.2291 10.9377L15.6249 12.5002V4.16683H20.8333V12.5002Z" fill="currentColor"/>
    </svg>
  );
};

export default CollectionsBookmarkIcon;
