import React from 'react';

export interface WatchOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WatchOffIcon = ({ size, ...props }: WatchOffIconProps) => {
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
      
<path d="M13.2396 6.97396C16.1146 6.97396 18.4479 9.30729 18.4479 12.1823C18.4479 12.849 18.3125 13.4844 18.0833 14.0781L19.6458 15.6406C20.2083 14.6094 20.5313 13.4323 20.5313 12.1823C20.5313 9.86979 19.4583 7.81771 17.7813 6.48438L16.3646 1.76562H10.1146L9.11458 5.10938L11.3438 7.33854C11.9375 7.10937 12.5729 6.97396 13.2396 6.97396Z" fill="currentColor"/>
<path d="M3.66667 2.60937L2.1875 4.07812L6.83333 8.72396C6.27083 9.75521 5.94792 10.9323 5.94792 12.1823C5.94792 14.4948 7.02083 16.5469 8.69792 17.8802L10.1146 22.599H16.3646L17.3646 19.2552L21.3438 23.2344L22.8125 21.7656L3.66667 2.60937ZM13.2396 17.3906C10.3646 17.3906 8.03125 15.0573 8.03125 12.1823C8.03125 11.5156 8.16667 10.8802 8.39583 10.2865L15.1354 17.026C14.5417 17.2552 13.9063 17.3906 13.2396 17.3906Z" fill="currentColor"/>
    </svg>
  );
};

export default WatchOffIcon;
