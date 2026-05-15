import React from 'react';

export interface BurstModeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BurstModeIcon = ({ size, ...props }: BurstModeIconProps) => {
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
        d="M1.04163 5.2085H3.12496V19.7918H1.04163V5.2085ZM5.20829 5.2085H7.29163V19.7918H5.20829V5.2085ZM22.9166 5.2085H10.4166C9.84371 5.2085 9.37496 5.67725 9.37496 6.25016V18.7502C9.37496 19.3231 9.84371 19.7918 10.4166 19.7918H22.9166C23.4895 19.7918 23.9583 19.3231 23.9583 18.7502V6.25016C23.9583 5.67725 23.4895 5.2085 22.9166 5.2085ZM11.4583 17.7085L14.0625 14.4272L15.927 16.6668L18.5312 13.3127L21.875 17.7085H11.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BurstModeIcon;
