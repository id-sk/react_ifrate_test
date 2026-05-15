import React from 'react';

export interface MicIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MicIcon = ({ size, ...props }: MicIconProps) => {
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
        d="M12.4999 15.1041C14.2291 15.1041 15.6145 13.7083 15.6145 11.9791L15.6249 5.72913C15.6249 3.99996 14.2291 2.60413 12.4999 2.60413C10.7708 2.60413 9.37492 3.99996 9.37492 5.72913V11.9791C9.37492 13.7083 10.7708 15.1041 12.4999 15.1041ZM18.0208 11.9791C18.0208 15.1041 15.3749 17.2916 12.4999 17.2916C9.62492 17.2916 6.97908 15.1041 6.97908 11.9791H5.20825C5.20825 15.5312 8.04159 18.4687 11.4583 18.9791V22.3958H13.5416V18.9791C16.9583 18.4791 19.7916 15.5416 19.7916 11.9791H18.0208Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MicIcon;
