import React from 'react';

export interface PhonelinkRingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhonelinkRingIcon = ({ size, ...props }: PhonelinkRingIconProps) => {
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
        d="M20.9506 8.02091L19.9089 9.06258C21.7839 10.9376 21.7839 13.8542 19.9089 15.8334L20.9506 16.8751C23.5548 14.4792 23.5548 10.5209 20.9506 8.02091ZM18.7631 10.2084L17.7214 11.2501C18.2423 11.9792 18.2423 12.9167 17.7214 13.6459L18.7631 14.6876C20.0131 13.4376 20.0131 11.5626 18.7631 10.2084ZM14.5964 1.04175H4.17977C3.03394 1.04175 2.09644 1.97925 2.09644 3.12508V21.8751C2.09644 23.0209 3.03394 23.9584 4.17977 23.9584H14.5964C15.7423 23.9584 16.6798 23.0209 16.6798 21.8751V3.12508C16.6798 1.97925 15.7423 1.04175 14.5964 1.04175ZM14.5964 20.8334H4.17977V4.16675H14.5964V20.8334Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PhonelinkRingIcon;
