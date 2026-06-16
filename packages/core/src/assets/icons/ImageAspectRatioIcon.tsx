import React from 'react';

export interface ImageAspectRatioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ImageAspectRatioIcon = ({ size, ...props }: ImageAspectRatioIconProps) => {
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
      
<path d="M16.6666 10.4165H14.5833V12.4998H16.6666V10.4165ZM16.6666 14.5832H14.5833V16.6665H16.6666V14.5832ZM8.33325 10.4165H6.24992V12.4998H8.33325V10.4165ZM12.4999 10.4165H10.4166V12.4998H12.4999V10.4165ZM20.8333 4.1665H4.16659C3.02075 4.1665 2.08325 5.104 2.08325 6.24984V18.7498C2.08325 19.8957 3.02075 20.8332 4.16659 20.8332H20.8333C21.9791 20.8332 22.9166 19.8957 22.9166 18.7498V6.24984C22.9166 5.104 21.9791 4.1665 20.8333 4.1665ZM20.8333 18.7498H4.16659V6.24984H20.8333V18.7498Z" fill="currentColor"/>
    </svg>
  );
};

export default ImageAspectRatioIcon;
