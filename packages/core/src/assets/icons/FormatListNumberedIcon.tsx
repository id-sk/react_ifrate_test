import React from 'react';

export interface FormatListNumberedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatListNumberedIcon = ({ size, ...props }: FormatListNumberedIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.60425 17.7084H4.68758V18.2292H3.64591V19.2709H4.68758V19.7917H2.60425V20.8334H5.72925V16.6667H2.60425V17.7084ZM3.64591 8.33341H4.68758V4.16675H2.60425V5.20841H3.64591V8.33341ZM2.60425 11.4584H4.47925L2.60425 13.6459V14.5834H5.72925V13.5417H3.85425L5.72925 11.3542V10.4167H2.60425V11.4584ZM7.81258 5.20841V7.29175H22.3959V5.20841H7.81258ZM7.81258 19.7917H22.3959V17.7084H7.81258V19.7917ZM7.81258 13.5417H22.3959V11.4584H7.81258V13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatListNumberedIcon;
