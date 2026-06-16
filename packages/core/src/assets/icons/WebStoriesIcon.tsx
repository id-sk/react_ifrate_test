import React from 'react';

export interface WebStoriesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WebStoriesIcon = ({ size, ...props }: WebStoriesIconProps) => {
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
      
<path d="M17.448 4.16659C18.5938 4.16659 19.5313 5.10409 19.5313 6.24992V18.7499C19.5313 19.8958 18.5938 20.8333 17.448 20.8333V4.16659ZM1.823 20.8333C1.823 21.9791 2.7605 22.9166 3.90633 22.9166H13.2813C14.4272 22.9166 15.3647 21.9791 15.3647 20.8333V4.16659C15.3647 3.02075 14.4272 2.08325 13.2813 2.08325H3.90633C2.7605 2.08325 1.823 3.02075 1.823 4.16659V20.8333ZM21.6147 18.7499C22.4792 18.7499 23.1772 18.052 23.1772 17.1874V7.81242C23.1772 6.94784 22.4792 6.24992 21.6147 6.24992V18.7499Z" fill="currentColor"/>
    </svg>
  );
};

export default WebStoriesIcon;
