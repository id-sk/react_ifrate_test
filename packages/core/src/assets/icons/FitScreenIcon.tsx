import React from 'react';

export interface FitScreenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FitScreenIcon = ({ size, ...props }: FitScreenIconProps) => {
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
        d="M17.7083 4.16669H20.8333C21.9791 4.16669 22.9166 5.10419 22.9166 6.25002V8.33335H20.8333V6.25002H17.7083V4.16669ZM4.16659 8.33335V6.25002H7.29159V4.16669H4.16659C3.02075 4.16669 2.08325 5.10419 2.08325 6.25002V8.33335H4.16659ZM20.8333 16.6667V18.75H17.7083V20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.75V16.6667H20.8333ZM7.29159 18.75H4.16659V16.6667H2.08325V18.75C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H7.29159V18.75ZM18.7499 8.33335H6.24992V16.6667H18.7499V8.33335Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FitScreenIcon;
