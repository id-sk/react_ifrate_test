import React from 'react';

export interface FormatItalicIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatItalicIcon = ({ size, ...props }: FormatItalicIconProps) => {
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
        d="M10.4167 5.20825V8.33325H12.7188L9.15625 16.6666H6.25V19.7916H14.5833V16.6666H12.2812L15.8438 8.33325H18.75V5.20825H10.4167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatItalicIcon;
