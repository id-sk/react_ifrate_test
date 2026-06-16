import React from 'react';

export interface HowToVoteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HowToVoteIcon = ({ size, ...props }: HowToVoteIconProps) => {
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
      
<path d="M18.75 13.5424H18.0417L15.9583 15.6257H17.9479L19.7917 17.7091H5.20833L7.0625 15.6257H9.19792L7.11458 13.5424H6.25L3.125 16.6674V20.8341C3.125 21.9799 4.05208 22.9174 5.19792 22.9174H19.7917C20.9375 22.9174 21.875 21.9903 21.875 20.8341V16.6674L18.75 13.5424ZM17.7083 8.28199L12.5521 13.4382L8.86458 9.75074L14.0208 4.59449L17.7083 8.28199ZM13.2917 2.38616L6.65625 9.02158C6.25 9.42783 6.25 10.0841 6.65625 10.4903L11.8125 15.6466C12.2188 16.0528 12.875 16.0528 13.2812 15.6466L19.9062 9.02158C20.3125 8.61533 20.3125 7.95908 19.9062 7.55283L14.75 2.39658C14.3542 1.97991 13.6979 1.97991 13.2917 2.38616Z" fill="currentColor"/>
    </svg>
  );
};

export default HowToVoteIcon;
