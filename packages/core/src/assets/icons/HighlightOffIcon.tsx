import React from 'react';

export interface HighlightOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HighlightOffIcon = ({ size, ...props }: HighlightOffIconProps) => {
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
      
<path d="M15.1978 8.33331L12.4999 11.0312L9.802 8.33331L8.33325 9.80206L11.0312 12.5L8.33325 15.1979L9.802 16.6666L12.4999 13.9687L15.1978 16.6666L16.6666 15.1979L13.9687 12.5L16.6666 9.80206L15.1978 8.33331ZM12.4999 2.08331C6.7395 2.08331 2.08325 6.73956 2.08325 12.5C2.08325 18.2604 6.7395 22.9166 12.4999 22.9166C18.2603 22.9166 22.9166 18.2604 22.9166 12.5C22.9166 6.73956 18.2603 2.08331 12.4999 2.08331ZM12.4999 20.8333C7.90617 20.8333 4.16659 17.0937 4.16659 12.5C4.16659 7.90623 7.90617 4.16665 12.4999 4.16665C17.0937 4.16665 20.8333 7.90623 20.8333 12.5C20.8333 17.0937 17.0937 20.8333 12.4999 20.8333Z" fill="currentColor"/>
    </svg>
  );
};

export default HighlightOffIcon;
