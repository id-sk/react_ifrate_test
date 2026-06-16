import React from 'react';

export interface DeveloperBoardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DeveloperBoardIcon = ({ size, ...props }: DeveloperBoardIconProps) => {
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
      
<path d="M22.9166 9.375V7.29167H20.8333V5.20833C20.8333 4.0625 19.8958 3.125 18.7499 3.125H4.16659C3.02075 3.125 2.08325 4.0625 2.08325 5.20833V19.7917C2.08325 20.9375 3.02075 21.875 4.16659 21.875H18.7499C19.8958 21.875 20.8333 20.9375 20.8333 19.7917V17.7083H22.9166V15.625H20.8333V13.5417H22.9166V11.4583H20.8333V9.375H22.9166ZM18.7499 19.7917H4.16659V5.20833H18.7499V19.7917ZM6.24992 13.5417H11.4583V17.7083H6.24992V13.5417ZM12.4999 7.29167H16.6666V10.4167H12.4999V7.29167ZM6.24992 7.29167H11.4583V12.5H6.24992V7.29167ZM12.4999 11.4583H16.6666V17.7083H12.4999V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default DeveloperBoardIcon;
