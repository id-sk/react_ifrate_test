import React from 'react';

export interface PowerInputIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PowerInputIcon = ({ size, ...props }: PowerInputIconProps) => {
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
      
<path d="M2.60413 9.375V11.4583H22.3958V9.375H2.60413ZM2.60413 15.625H7.81246V13.5417H2.60413V15.625ZM9.89579 15.625H15.1041V13.5417H9.89579V15.625ZM17.1875 15.625H22.3958V13.5417H17.1875V15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default PowerInputIcon;
