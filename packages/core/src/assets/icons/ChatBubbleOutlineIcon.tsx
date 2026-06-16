import React from 'react';

export interface ChatBubbleOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChatBubbleOutlineIcon = ({ size, ...props }: ChatBubbleOutlineIconProps) => {
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
      
<path d="M20.8333 2.08325H4.16659C3.02075 2.08325 2.08325 3.02075 2.08325 4.16659V22.9166L6.24992 18.7499H20.8333C21.9791 18.7499 22.9166 17.8124 22.9166 16.6666V4.16659C22.9166 3.02075 21.9791 2.08325 20.8333 2.08325ZM20.8333 16.6666H6.24992L4.16659 18.7499V4.16659H20.8333V16.6666Z" fill="currentColor"/>
    </svg>
  );
};

export default ChatBubbleOutlineIcon;
