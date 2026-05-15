import React from 'react';

export interface LocalFireDepartmentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalFireDepartmentIcon = ({ size, ...props }: LocalFireDepartmentIconProps) => {
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
        d="M12.4998 14.4792L10.2811 16.6562C9.69775 17.2396 9.37484 18 9.37484 18.8125C9.37484 20.5 10.7811 21.875 12.4998 21.875C14.2186 21.875 15.6248 20.5 15.6248 18.8125C15.6248 18 15.3019 17.2292 14.7186 16.6562L12.4998 14.4792Z"
        fill="currentColor"
      />
      <path
        d="M16.6665 7.29167L16.2082 7.86458C14.979 9.39583 12.4998 8.53125 12.4998 6.5625V3.125C12.4998 3.125 4.1665 7.29167 4.1665 14.5833C4.1665 17.625 5.7915 20.2812 8.21859 21.7292C7.63525 20.9062 7.2915 19.8958 7.2915 18.8125C7.2915 17.4375 7.83317 16.1458 8.82275 15.1667L12.4998 11.5625L16.1769 15.1771C17.1665 16.1458 17.7082 17.4375 17.7082 18.8229C17.7082 19.8854 17.3853 20.8646 16.8228 21.6875C18.7915 20.4896 20.2498 18.5 20.6873 16.1667C21.3748 12.4688 19.5728 8.97917 16.6665 7.29167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocalFireDepartmentIcon;
