import React from 'react';

export interface NightlightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NightlightIcon = ({ size, ...props }: NightlightIconProps) => {
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
        d="M15.1042 2.08325C17 2.08325 18.7812 2.60409 20.3125 3.4895C17.1979 5.29159 15.1042 8.64575 15.1042 12.4999C15.1042 16.3541 17.1979 19.7083 20.3125 21.5103C18.7812 22.3958 17 22.9166 15.1042 22.9166C9.35417 22.9166 4.6875 18.2499 4.6875 12.4999C4.6875 6.74992 9.35417 2.08325 15.1042 2.08325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NightlightIcon;
