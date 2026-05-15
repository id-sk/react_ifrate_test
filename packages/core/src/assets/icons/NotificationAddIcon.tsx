import React from 'react';

export interface NotificationAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NotificationAddIcon = ({ size, ...props }: NotificationAddIconProps) => {
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
        d="M8.33325 20.8335H12.4999C12.4999 21.9793 11.5624 22.9168 10.4166 22.9168C9.27075 22.9168 8.33325 21.9793 8.33325 20.8335ZM12.4999 9.37516C12.4999 12.0939 14.2395 14.4064 16.6666 15.271V17.7085H18.7499V19.7918H2.08325V17.7085H4.16659V10.4168C4.16659 7.51058 6.15617 5.06266 8.85409 4.37516V3.646C8.85409 2.78141 9.552 2.0835 10.4166 2.0835C11.2812 2.0835 11.9791 2.78141 11.9791 3.646V4.37516C12.7187 4.56266 13.3958 4.88558 14.0103 5.31266C13.0624 6.396 12.4999 7.82308 12.4999 9.37516ZM22.9166 8.3335H19.7916V5.2085H17.7083V8.3335H14.5833V10.4168H17.7083V13.5418H19.7916V10.4168H22.9166V8.3335Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NotificationAddIcon;
