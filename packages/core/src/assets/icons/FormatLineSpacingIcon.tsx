import React from 'react';

export interface FormatLineSpacingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatLineSpacingIcon = ({ size, ...props }: FormatLineSpacingIconProps) => {
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
        d="M6.5105 7.29159H9.11466L5.46883 3.64575L1.823 7.29159H4.42716V17.7083H1.823L5.46883 21.3541L9.11466 17.7083H6.5105V7.29159ZM10.6772 5.20825V7.29159H23.1772V5.20825H10.6772ZM10.6772 19.7916H23.1772V17.7083H10.6772V19.7916ZM10.6772 13.5416H23.1772V11.4583H10.6772V13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatLineSpacingIcon;
