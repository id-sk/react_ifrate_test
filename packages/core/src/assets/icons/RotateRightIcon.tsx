import React from 'react';

export interface RotateRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RotateRightIcon = ({ size, ...props }: RotateRightIconProps) => {
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
      
<path d="M16.2344 7.38021L11.4948 2.64062V5.83854C7.39062 6.34896 4.20312 9.84896 4.20312 14.099C4.20312 18.349 7.38021 21.849 11.4948 22.3594V20.2552C8.53646 19.7552 6.28646 17.1927 6.28646 14.099C6.28646 11.0052 8.53646 8.44271 11.4948 7.94271V12.0156L16.2344 7.38021ZM20.7969 13.0573C20.6198 11.6094 20.0469 10.2135 19.1094 9.00521L17.6302 10.4844C18.1927 11.2656 18.5469 12.151 18.6927 13.0573H20.7969ZM13.5781 20.2448V22.349C15.026 22.1719 16.4323 21.6094 17.6406 20.6719L16.1406 19.1719C15.3594 19.7344 14.4844 20.099 13.5781 20.2448ZM17.6302 17.724L19.1094 19.1927C20.0469 17.9844 20.6198 16.5885 20.7969 15.1406H18.6927C18.5469 16.0469 18.1927 16.9323 17.6302 17.724Z" fill="currentColor"/>
    </svg>
  );
};

export default RotateRightIcon;
