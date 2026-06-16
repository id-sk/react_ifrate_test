import React from 'react';

export interface ReportOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReportOffIcon = ({ size, ...props }: ReportOffIconProps) => {
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
      
<path d="M11.8385 6.91675H13.9219V9.95842L21.1198 17.1563L22.2552 16.0105V8.23967L16.7656 2.75008H8.99479L7.85937 3.89591L11.8385 7.87508V6.91675ZM23.5781 22.2605L2.74479 1.41675L1.42188 2.73966L5.21354 6.53133L3.50521 8.23967V16.0105L8.99479 21.5001H16.7656L18.474 19.8022L22.2552 23.5834L23.5781 22.2605ZM12.8802 17.6459C12.1302 17.6459 11.526 17.0417 11.526 16.2917C11.526 15.5417 12.1302 14.9376 12.8802 14.9376C13.6302 14.9376 14.2344 15.5417 14.2344 16.2917C14.2344 17.0417 13.6302 17.6459 12.8802 17.6459Z" fill="currentColor"/>
    </svg>
  );
};

export default ReportOffIcon;
