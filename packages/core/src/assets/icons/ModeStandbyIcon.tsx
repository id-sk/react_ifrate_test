import React from 'react';

export interface ModeStandbyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ModeStandbyIcon = ({ size, ...props }: ModeStandbyIconProps) => {
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
      
<path d="M12.4999 2.08325C6.76034 2.08325 2.08325 6.76034 2.08325 12.4999C2.08325 18.2395 6.76034 22.9166 12.4999 22.9166C18.2395 22.9166 22.9166 18.2395 22.9166 12.4999C22.9166 6.76034 18.2395 2.08325 12.4999 2.08325ZM12.4999 20.8333C7.90617 20.8333 4.16659 17.0937 4.16659 12.4999C4.16659 7.90617 7.90617 4.16659 12.4999 4.16659C17.0937 4.16659 20.8333 7.90617 20.8333 12.4999C20.8333 17.0937 17.0937 20.8333 12.4999 20.8333ZM15.6249 12.4999C15.6249 14.2291 14.2291 15.6249 12.4999 15.6249C10.7708 15.6249 9.37492 14.2291 9.37492 12.4999C9.37492 10.7708 10.7708 9.37492 12.4999 9.37492C14.2291 9.37492 15.6249 10.7708 15.6249 12.4999Z" fill="currentColor"/>
    </svg>
  );
};

export default ModeStandbyIcon;
