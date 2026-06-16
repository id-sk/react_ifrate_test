import React from 'react';

export interface AlignHorizontalCenterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalCenterIcon = ({ size, ...props }: AlignHorizontalCenterIconProps) => {
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
      
<path d="M11.4583 2.08325H13.5417V7.29159H21.875V10.4166H13.5417V14.5833H18.75V17.7083H13.5417V22.9166H11.4583V17.7083H6.25V14.5833H11.4583V10.4166H3.125V7.29159H11.4583V2.08325Z" fill="currentColor"/>
    </svg>
  );
};

export default AlignHorizontalCenterIcon;
