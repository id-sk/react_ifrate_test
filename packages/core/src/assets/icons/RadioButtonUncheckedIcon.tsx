import React from 'react';

export interface RadioButtonUncheckedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RadioButtonUncheckedIcon = ({ size, ...props }: RadioButtonUncheckedIconProps) => {
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
      
<path d="M12.4999 2.0835C6.74992 2.0835 2.08325 6.75016 2.08325 12.5002C2.08325 18.2502 6.74992 22.9168 12.4999 22.9168C18.2499 22.9168 22.9166 18.2502 22.9166 12.5002C22.9166 6.75016 18.2499 2.0835 12.4999 2.0835ZM12.4999 20.8335C7.89575 20.8335 4.16659 17.1043 4.16659 12.5002C4.16659 7.896 7.89575 4.16683 12.4999 4.16683C17.1041 4.16683 20.8333 7.896 20.8333 12.5002C20.8333 17.1043 17.1041 20.8335 12.4999 20.8335Z" fill="currentColor"/>
    </svg>
  );
};

export default RadioButtonUncheckedIcon;
