import React from 'react';

export interface AssistantPhotoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AssistantPhotoIcon = ({ size, ...props }: AssistantPhotoIconProps) => {
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
        d="M14.4792 5.72933L14.0625 3.646H4.6875V21.3543H6.77083V14.0627H12.6042L13.0208 16.146H20.3125V5.72933H14.4792Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AssistantPhotoIcon;
