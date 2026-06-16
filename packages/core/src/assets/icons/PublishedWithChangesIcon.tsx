import React from 'react';

export interface PublishedWithChangesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PublishedWithChangesIcon = ({ size, ...props }: PublishedWithChangesIconProps) => {
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
      
<path d="M18.3958 9.92704L11.0312 17.2916L6.6145 12.875L8.08325 11.4062L11.0312 14.3541L16.927 8.45829L18.3958 9.92704ZM4.16659 12.5C4.16659 10.0729 5.22909 7.89579 6.89575 6.37496L9.37492 8.85413V2.60413H3.12492L5.41659 4.89579C3.37492 6.79163 2.08325 9.48954 2.08325 12.5C2.08325 17.9062 6.19784 22.3437 11.4583 22.8645V20.7604C7.35409 20.25 4.16659 16.7395 4.16659 12.5ZM22.9166 12.5C22.9166 7.09371 18.802 2.65621 13.5416 2.13538V4.23954C17.6458 4.74996 20.8333 8.26038 20.8333 12.5C20.8333 14.927 19.7708 17.1041 18.1041 18.625L15.6249 16.1458V22.3958H21.8749L19.5833 20.1041C21.6249 18.2083 22.9166 15.5104 22.9166 12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default PublishedWithChangesIcon;
