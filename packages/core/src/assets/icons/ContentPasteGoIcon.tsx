import React from 'react';

export interface ContentPasteGoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ContentPasteGoIcon = ({ size, ...props }: ContentPasteGoIconProps) => {
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
      
<path d="M4.68758 6.24992H6.77091V9.37492H17.1876V6.24992H19.2709V12.4999H21.3542V6.24992C21.3542 5.10409 20.4167 4.16659 19.2709 4.16659H14.9167C14.4792 2.95825 13.3334 2.08325 11.9792 2.08325C10.6251 2.08325 9.47925 2.95825 9.04175 4.16659H4.68758C3.54175 4.16659 2.60425 5.10409 2.60425 6.24992V20.8333C2.60425 21.9791 3.54175 22.9166 4.68758 22.9166H9.89591V20.8333H4.68758V6.24992ZM11.9792 4.16659C12.5522 4.16659 13.0209 4.63534 13.0209 5.20825C13.0209 5.78117 12.5522 6.24992 11.9792 6.24992C11.4063 6.24992 10.9376 5.78117 10.9376 5.20825C10.9376 4.63534 11.4063 4.16659 11.9792 4.16659Z" fill="currentColor"/>
<path d="M18.2397 14.5833L16.7605 16.052L18.4063 17.6978H11.9792V19.7812H18.4063L16.7605 21.4374L18.2397 22.9062L22.3959 18.7395L18.2397 14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default ContentPasteGoIcon;
