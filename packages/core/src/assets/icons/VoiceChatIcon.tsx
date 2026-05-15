import React from 'react';

export interface VoiceChatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VoiceChatIcon = ({ size, ...props }: VoiceChatIconProps) => {
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
        d="M20.8333 2.0835H4.16659C3.02075 2.0835 2.08325 3.021 2.08325 4.16683V22.9168L6.24992 18.7502H20.8333C21.9791 18.7502 22.9166 17.8127 22.9166 16.6668V4.16683C22.9166 3.021 21.9791 2.0835 20.8333 2.0835ZM20.8333 16.6668H6.24992L4.16659 18.7502V4.16683H20.8333V16.6668Z"
        fill="currentColor"
      />
      <path d="M13.2812 5.2085H11.7187V15.6252H13.2812V5.2085Z" fill="currentColor" />
      <path d="M10.4166 7.29183H8.85409V13.5418H10.4166V7.29183Z" fill="currentColor" />
      <path d="M7.81242 9.37516H6.24992V11.4585H7.81242V9.37516Z" fill="currentColor" />
      <path d="M16.1458 7.29183H14.5833V13.5418H16.1458V7.29183Z" fill="currentColor" />
      <path d="M18.7499 9.37516H17.1874V11.4585H18.7499V9.37516Z" fill="currentColor" />
    </svg>
  );
};

export default VoiceChatIcon;
