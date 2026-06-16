import React from 'react';

export interface ControlPointIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ControlPointIcon = ({ size, ...props }: ControlPointIconProps) => {
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
      
<path d="M13.5416 7.29183H11.4583V11.4585H7.29159V13.5418H11.4583V17.7085H13.5416V13.5418H17.7083V11.4585H13.5416V7.29183ZM12.4999 2.0835C6.76034 2.0835 2.08325 6.76058 2.08325 12.5002C2.08325 18.2397 6.76034 22.9168 12.4999 22.9168C18.2395 22.9168 22.9166 18.2397 22.9166 12.5002C22.9166 6.76058 18.2395 2.0835 12.4999 2.0835ZM12.4999 20.8335C7.90617 20.8335 4.16659 17.0939 4.16659 12.5002C4.16659 7.90641 7.90617 4.16683 12.4999 4.16683C17.0937 4.16683 20.8333 7.90641 20.8333 12.5002C20.8333 17.0939 17.0937 20.8335 12.4999 20.8335Z" fill="currentColor"/>
    </svg>
  );
};

export default ControlPointIcon;
