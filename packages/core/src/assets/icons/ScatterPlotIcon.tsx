import React from 'react';

export interface ScatterPlotIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScatterPlotIcon = ({ size, ...props }: ScatterPlotIconProps) => {
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
        d="M7.5 17.9166C9.22589 17.9166 10.625 16.5175 10.625 14.7916C10.625 13.0657 9.22589 11.6666 7.5 11.6666C5.77411 11.6666 4.375 13.0657 4.375 14.7916C4.375 16.5175 5.77411 17.9166 7.5 17.9166Z"
        fill="currentColor"
      />
      <path
        d="M11.6667 9.58325C13.3926 9.58325 14.7917 8.18414 14.7917 6.45825C14.7917 4.73236 13.3926 3.33325 11.6667 3.33325C9.94078 3.33325 8.54167 4.73236 8.54167 6.45825C8.54167 8.18414 9.94078 9.58325 11.6667 9.58325Z"
        fill="currentColor"
      />
      <path
        d="M17.5 21.6666C19.2259 21.6666 20.625 20.2675 20.625 18.5416C20.625 16.8157 19.2259 15.4166 17.5 15.4166C15.7741 15.4166 14.375 16.8157 14.375 18.5416C14.375 20.2675 15.7741 21.6666 17.5 21.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ScatterPlotIcon;
