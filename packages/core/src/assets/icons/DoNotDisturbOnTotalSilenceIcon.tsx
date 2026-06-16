import React from 'react';

export interface DoNotDisturbOnTotalSilenceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoNotDisturbOnTotalSilenceIcon = ({ size, ...props }: DoNotDisturbOnTotalSilenceIconProps) => {
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
      
<path d="M12.5 2.08325C6.75004 2.08325 2.08337 6.74992 2.08337 12.4999C2.08337 18.2499 6.75004 22.9166 12.5 22.9166C18.25 22.9166 22.9167 18.2499 22.9167 12.4999C22.9167 6.74992 18.25 2.08325 12.5 2.08325ZM12.5 20.8333C7.90629 20.8333 4.16671 17.0937 4.16671 12.4999C4.16671 7.90617 7.90629 4.16659 12.5 4.16659C17.0938 4.16659 20.8334 7.90617 20.8334 12.4999C20.8334 17.0937 17.0938 20.8333 12.5 20.8333ZM12.5 6.24992C9.06254 6.24992 6.25004 9.06242 6.25004 12.4999C6.25004 15.9374 9.06254 18.7499 12.5 18.7499C15.9375 18.7499 18.75 15.9374 18.75 12.4999C18.75 9.06242 16.0417 6.24992 12.5 6.24992ZM15.625 13.5416H9.37504V11.4583H15.625V13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default DoNotDisturbOnTotalSilenceIcon;
