import React from 'react';

export interface FormatListNumberedRtlIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatListNumberedRtlIcon = ({ size, ...props }: FormatListNumberedRtlIconProps) => {
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
      
<path d="M19.2709 17.7084H21.3542V18.2292H20.3126V19.2709H21.3542V19.7917H19.2709V20.8334H22.3959V16.6667H19.2709V17.7084ZM20.3126 8.33341H21.3542V4.16675H19.2709V5.20841H20.3126V8.33341ZM19.2709 11.4584H21.1459L19.2709 13.6459V14.5834H22.3959V13.5417H20.5209L22.3959 11.3542V10.4167H19.2709V11.4584ZM2.60425 5.20841H17.1876V7.29175H2.60425V5.20841ZM2.60425 17.7084H17.1876V19.7917H2.60425V17.7084ZM2.60425 11.4584H17.1876V13.5417H2.60425V11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatListNumberedRtlIcon;
