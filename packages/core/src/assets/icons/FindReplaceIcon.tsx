import React from 'react';

export interface FindReplaceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FindReplaceIcon = ({ size, ...props }: FindReplaceIconProps) => {
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
      
<path d="M10.6823 5.47396C12.1198 5.47396 13.4219 6.05729 14.3698 6.99479L11.724 9.64062H17.974V3.39062L15.8385 5.52604C14.5156 4.20313 12.6927 3.39062 10.6823 3.39062C7.00521 3.39062 3.98437 6.10937 3.47396 9.64062H5.57812C6.05729 7.26562 8.16146 5.47396 10.6823 5.47396ZM16.5573 14.9948C17.2448 14.0573 17.724 12.9427 17.8906 11.724H15.7865C15.3073 14.099 13.2031 15.8906 10.6823 15.8906C9.24479 15.8906 7.94271 15.3073 6.99479 14.3698L9.64062 11.724H3.39062V17.974L5.52604 15.8385C6.84896 17.1615 8.67188 17.974 10.6823 17.974C12.2969 17.974 13.7865 17.4427 14.9948 16.5573L20.0573 21.6094L21.6094 20.0573L16.5573 14.9948Z" fill="currentColor"/>
    </svg>
  );
};

export default FindReplaceIcon;
