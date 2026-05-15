import React from 'react';

export interface ForwardToInboxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ForwardToInboxIcon = ({ size, ...props }: ForwardToInboxIconProps) => {
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
        d="M20.3125 2.60425H3.64583C2.5 2.60425 1.5625 3.54175 1.5625 4.68758V17.1876C1.5625 18.3334 2.5 19.2709 3.64583 19.2709H13.0208V17.1876H3.64583V6.77091L11.9792 11.9792L20.3125 6.77091V11.9792H22.3958V4.68758C22.3958 3.54175 21.4583 2.60425 20.3125 2.60425ZM11.9792 9.89591L3.64583 4.68758H20.3125L11.9792 9.89591ZM19.2708 14.0626L23.4375 18.2292L19.2708 22.3959V19.2709H15.1042V17.1876H19.2708V14.0626Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ForwardToInboxIcon;
