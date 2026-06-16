import React from 'react';

export interface RestartAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RestartAltIcon = ({ size, ...props }: RestartAltIconProps) => {
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
      
<path d="M12.5001 5.76562V2.64062L8.33341 6.80729L12.5001 10.974V7.84896C15.948 7.84896 18.7501 10.651 18.7501 14.099C18.7501 17.1927 16.4897 19.7552 13.5417 20.2552V22.3594C17.6563 21.849 20.8334 18.349 20.8334 14.099C20.8334 9.49479 17.1042 5.76562 12.5001 5.76562Z" fill="currentColor"/>
<path d="M6.25008 14.099C6.25008 12.3802 6.948 10.8177 8.08341 9.68229L6.60425 8.20312C5.10425 9.71354 4.16675 11.7969 4.16675 14.099C4.16675 18.349 7.34383 21.849 11.4584 22.3594V20.2552C8.5105 19.7552 6.25008 17.1927 6.25008 14.099Z" fill="currentColor"/>
    </svg>
  );
};

export default RestartAltIcon;
