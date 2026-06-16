import React from 'react';

export interface Person4IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Person4Icon = ({ size, ...props }: Person4IconProps) => {
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
      
<path d="M19.1563 15.6877C17.4063 14.7918 15.1355 14.0627 12.5001 14.0627C9.86466 14.0627 7.59383 14.7918 5.84383 15.6877C4.80216 16.2189 4.16675 17.2918 4.16675 18.4585V21.3543H20.8334V18.4585C20.8334 17.2918 20.198 16.2189 19.1563 15.6877Z" fill="currentColor"/>
<path d="M12.5001 13.021C14.8022 13.021 16.6667 11.1564 16.6667 8.85433C16.6667 7.42725 16.6667 5.2085 16.6667 5.2085C16.6667 4.34391 15.9688 3.646 15.1042 3.646C14.5626 3.646 14.0834 3.92725 13.8022 4.34391C13.5209 3.92725 13.0417 3.646 12.5001 3.646C11.9584 3.646 11.4792 3.92725 11.198 4.34391C10.9167 3.92725 10.4376 3.646 9.89591 3.646C9.03133 3.646 8.33341 4.34391 8.33341 5.2085C8.33341 5.2085 8.33341 7.41683 8.33341 8.85433C8.33341 11.1564 10.198 13.021 12.5001 13.021Z" fill="currentColor"/>
    </svg>
  );
};

export default Person4Icon;
