import React from 'react';

export interface EnergySavingsLeafIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EnergySavingsLeafIcon = ({ size, ...props }: EnergySavingsLeafIconProps) => {
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
      
<path d="M12.5 3.125C7.5 3.125 3.125 7.14583 3.125 12.5C3.125 14.7083 3.89583 16.7396 5.17708 18.3438L3.125 20.4062L4.59375 21.875L6.64583 19.8229C8.26042 21.1042 10.2917 21.875 12.5 21.875C14.8958 21.875 17.3021 20.9583 19.125 19.125C20.9583 17.3021 21.875 14.8958 21.875 12.5V3.125H12.5ZM16.4896 12.7708L11.1146 17.5937C10.9479 17.75 10.6875 17.7396 10.5312 17.5833C10.3854 17.4375 10.3646 17.2083 10.4896 17.0417L13.0312 13.5729L8.8125 13.1562C8.35417 13.1146 8.15625 12.5417 8.5 12.2292L13.875 7.40625C14.0417 7.25 14.3021 7.26042 14.4583 7.41667C14.6042 7.5625 14.625 7.79167 14.5 7.95833L11.9583 11.4271L16.1771 11.8438C16.6458 11.8854 16.8333 12.4583 16.4896 12.7708Z" fill="currentColor"/>
    </svg>
  );
};

export default EnergySavingsLeafIcon;
