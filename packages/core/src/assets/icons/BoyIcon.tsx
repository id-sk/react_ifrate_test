import React from 'react';

export interface BoyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BoyIcon = ({ size, ...props }: BoyIconProps) => {
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
      
<path d="M12.5 7.81234C13.5104 7.81234 14.3229 6.99984 14.3229 5.98942C14.3229 4.979 13.5104 4.1665 12.5 4.1665C11.4896 4.1665 10.6771 4.979 10.6771 5.98942C10.6771 6.99984 11.4896 7.81234 12.5 7.81234ZM14.5833 20.8332V15.6248H15.625V10.9373C15.625 9.7915 14.6875 8.854 13.5417 8.854H11.4583C10.3125 8.854 9.375 9.7915 9.375 10.9373V15.6248H10.4167V20.8332H14.5833Z" fill="currentColor"/>
    </svg>
  );
};

export default BoyIcon;
