import React from 'react';

export interface RefreshIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RefreshIcon = ({ size, ...props }: RefreshIconProps) => {
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
        d="M18.3802 6.61442C16.8698 5.104 14.7969 4.1665 12.4948 4.1665C7.89062 4.1665 4.17188 7.89567 4.17188 12.4998C4.17188 17.104 7.89062 20.8332 12.4948 20.8332C16.3802 20.8332 19.6198 18.1769 20.5469 14.5832H18.3802C17.526 17.0103 15.2135 18.7498 12.4948 18.7498C9.04687 18.7498 6.24479 15.9478 6.24479 12.4998C6.24479 9.05192 9.04687 6.24984 12.4948 6.24984C14.224 6.24984 15.7656 6.96859 16.8906 8.104L13.5365 11.4582H20.8281V4.1665L18.3802 6.61442Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RefreshIcon;
