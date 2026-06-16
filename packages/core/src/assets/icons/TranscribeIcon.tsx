import React from 'react';

export interface TranscribeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TranscribeIcon = ({ size, ...props }: TranscribeIconProps) => {
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
      
<path d="M18.7188 17.1875L20.4167 15.4895C17.5313 12.3437 17.5313 7.61454 20.4167 4.30204L18.7188 2.60413C14.6563 6.65621 14.6459 12.9687 18.7188 17.1875ZM23.9167 11.927C23.0417 10.6979 23.0417 9.10413 23.9167 7.87496L22.1667 6.11454C20.0625 8.21871 20.0625 11.3958 22.1667 13.6875L23.9167 11.927ZM9.41671 14.0625C11.7188 14.0625 13.5834 12.1979 13.5834 9.89579C13.5834 7.59371 11.7188 5.72913 9.41671 5.72913C7.11462 5.72913 5.25004 7.59371 5.25004 9.89579C5.25004 12.1979 7.11462 14.0625 9.41671 14.0625ZM16.073 16.7291C14.323 15.8333 12.0521 15.1041 9.41671 15.1041C6.78129 15.1041 4.51046 15.8333 2.76046 16.7291C1.71879 17.2604 1.08337 18.3333 1.08337 19.5V22.3958H17.75V19.5C17.75 18.3333 17.1146 17.2604 16.073 16.7291Z" fill="currentColor"/>
    </svg>
  );
};

export default TranscribeIcon;
