import React from 'react';

export interface CloudCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CloudCircleIcon = ({ size, ...props }: CloudCircleIconProps) => {
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
        d="M12.4999 2.08325C6.74992 2.08325 2.08325 6.74992 2.08325 12.4999C2.08325 18.2499 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.2499 22.9166 12.4999C22.9166 6.74992 18.2499 2.08325 12.4999 2.08325ZM17.1874 16.6666H8.33325C6.60409 16.6666 5.20825 15.2708 5.20825 13.5416C5.20825 11.8124 6.60409 10.4166 8.33325 10.4166L8.47909 10.427C8.93742 8.62492 10.552 7.29159 12.4999 7.29159C14.802 7.29159 16.6666 9.15617 16.6666 11.4583H17.1874C18.6249 11.4583 19.7916 12.6249 19.7916 14.0624C19.7916 15.4999 18.6249 16.6666 17.1874 16.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloudCircleIcon;
