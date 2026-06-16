import React from 'react';

export interface GraphicEqIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GraphicEqIcon = ({ size, ...props }: GraphicEqIconProps) => {
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
      
<path d="M7.29167 18.7499H9.375V6.24992H7.29167V18.7499ZM11.4583 22.9166H13.5417V2.08325H11.4583V22.9166ZM3.125 14.5833H5.20833V10.4166H3.125V14.5833ZM15.625 18.7499H17.7083V6.24992H15.625V18.7499ZM19.7917 10.4166V14.5833H21.875V10.4166H19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default GraphicEqIcon;
