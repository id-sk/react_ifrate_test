import React from 'react';

export interface CodeOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CodeOffIcon = ({ size, ...props }: CodeOffIconProps) => {
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
      
<path d="M20.2865 11.7604L15.5156 6.97917L16.9844 5.51042L23.2344 11.7604L19.4948 15.5L18.026 14.0208L20.2865 11.7604ZM1.76562 3.65625L6.13021 8.02083L2.40104 11.7604L8.65104 18.0104L10.1198 16.5417L5.34896 11.7604L7.60938 9.5L20.9219 22.8125L22.3906 21.3438L3.24479 2.1875L1.76562 3.65625Z" fill="currentColor"/>
    </svg>
  );
};

export default CodeOffIcon;
