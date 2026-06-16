import React from 'react';

export interface CancelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CancelIcon = ({ size, ...props }: CancelIconProps) => {
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
      
<path d="M12.4999 2.0835C6.7395 2.0835 2.08325 6.73975 2.08325 12.5002C2.08325 18.2606 6.7395 22.9168 12.4999 22.9168C18.2603 22.9168 22.9166 18.2606 22.9166 12.5002C22.9166 6.73975 18.2603 2.0835 12.4999 2.0835ZM17.7083 16.2397L16.2395 17.7085L12.4999 13.9689L8.76034 17.7085L7.29159 16.2397L11.0312 12.5002L7.29159 8.76058L8.76034 7.29183L12.4999 11.0314L16.2395 7.29183L17.7083 8.76058L13.9687 12.5002L17.7083 16.2397Z" fill="currentColor"/>
    </svg>
  );
};

export default CancelIcon;
