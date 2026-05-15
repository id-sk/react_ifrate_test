import React from 'react';

export interface TocIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TocIcon = ({ size, ...props }: TocIconProps) => {
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
        d="M3.125 9.37496H17.7083V7.29163H3.125V9.37496ZM3.125 13.5416H17.7083V11.4583H3.125V13.5416ZM3.125 17.7083H17.7083V15.625H3.125V17.7083ZM19.7917 17.7083H21.875V15.625H19.7917V17.7083ZM19.7917 7.29163V9.37496H21.875V7.29163H19.7917ZM19.7917 13.5416H21.875V11.4583H19.7917V13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TocIcon;
