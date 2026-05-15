import React from 'react';

export interface NotificationsActive1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NotificationsActive1Icon = ({ size, ...props }: NotificationsActive1IconProps) => {
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
        d="M7.89575 3.98958L6.40617 2.5C3.90617 4.40625 2.26034 7.34375 2.1145 10.6771H4.19784C4.35409 7.91667 5.77075 5.5 7.89575 3.98958ZM20.802 10.6771H22.8853C22.7291 7.34375 21.0833 4.40625 18.5937 2.5L17.1145 3.98958C19.2187 5.5 20.6458 7.91667 20.802 10.6771ZM18.7499 11.1979C18.7499 8 17.0416 5.32292 14.0624 4.61458V3.90625C14.0624 3.04167 13.3645 2.34375 12.4999 2.34375C11.6353 2.34375 10.9374 3.04167 10.9374 3.90625V4.61458C7.94784 5.32292 6.24992 7.98958 6.24992 11.1979V16.4062L4.16659 18.4896V19.5312H20.8333V18.4896L18.7499 16.4062V11.1979ZM12.4999 22.6562C12.6458 22.6562 12.7812 22.6458 12.9166 22.6146C13.5937 22.4687 14.1458 22.0104 14.4166 21.3854C14.5208 21.1354 14.5728 20.8646 14.5728 20.5729H10.4062C10.4166 21.7188 11.3437 22.6562 12.4999 22.6562Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NotificationsActive1Icon;
