import React from 'react';

export interface RotateLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RotateLeftIcon = ({ size, ...props }: RotateLeftIconProps) => {
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
      
<path d="M7.36979 10.4844L5.90104 9.00521C4.96354 10.2135 4.38021 11.6094 4.20312 13.0573H6.30729C6.45312 12.151 6.81771 11.2656 7.36979 10.4844ZM6.30729 15.1406H4.20312C4.38021 16.5885 4.95312 17.9844 5.89062 19.1927L7.35937 17.7135C6.81771 16.9323 6.45312 16.0573 6.30729 15.1406ZM7.35937 20.6823C8.56771 21.6198 9.97396 22.1823 11.4219 22.3594V20.2448C10.5156 20.0885 9.64062 19.7344 8.85937 19.1719L7.35937 20.6823ZM13.5052 5.83854V2.64062L8.76562 7.38021L13.5052 12.0156V7.94271C16.4635 8.44271 18.7135 11.0052 18.7135 14.099C18.7135 17.1927 16.4635 19.7552 13.5052 20.2552V22.3594C17.6198 21.849 20.7969 18.349 20.7969 14.099C20.7969 9.84896 17.6198 6.34896 13.5052 5.83854Z" fill="currentColor"/>
    </svg>
  );
};

export default RotateLeftIcon;
