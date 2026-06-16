import React from 'react';

export interface AccessTimeFilledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccessTimeFilledIcon = ({ size, ...props }: AccessTimeFilledIconProps) => {
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
      
<path d="M12.4895 2.08325C6.7395 2.08325 2.08325 6.74992 2.08325 12.4999C2.08325 18.2499 6.7395 22.9166 12.4895 22.9166C18.2499 22.9166 22.9166 18.2499 22.9166 12.4999C22.9166 6.74992 18.2499 2.08325 12.4895 2.08325ZM15.927 17.4062L11.4583 12.927V7.29159H13.5416V12.0728L17.4062 15.9374L15.927 17.4062Z" fill="currentColor"/>
    </svg>
  );
};

export default AccessTimeFilledIcon;
