import React from 'react';

export interface ToggleOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ToggleOnIcon = ({ size, ...props }: ToggleOnIconProps) => {
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
        d="M17.7083 7.2915H7.29159C4.41659 7.2915 2.08325 9.62484 2.08325 12.4998C2.08325 15.3748 4.41659 17.7082 7.29159 17.7082H17.7083C20.5833 17.7082 22.9166 15.3748 22.9166 12.4998C22.9166 9.62484 20.5833 7.2915 17.7083 7.2915ZM17.7083 15.6248C15.9791 15.6248 14.5833 14.229 14.5833 12.4998C14.5833 10.7707 15.9791 9.37484 17.7083 9.37484C19.4374 9.37484 20.8333 10.7707 20.8333 12.4998C20.8333 14.229 19.4374 15.6248 17.7083 15.6248Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ToggleOnIcon;
