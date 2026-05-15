import React from 'react';

export interface MedicalServicesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MedicalServicesIcon = ({ size, ...props }: MedicalServicesIconProps) => {
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
        d="M20.8333 6.25016H16.6666V4.16683C16.6666 3.021 15.7291 2.0835 14.5833 2.0835H10.4166C9.27075 2.0835 8.33325 3.021 8.33325 4.16683V6.25016H4.16659C3.02075 6.25016 2.08325 7.18766 2.08325 8.3335V20.8335C2.08325 21.9793 3.02075 22.9168 4.16659 22.9168H20.8333C21.9791 22.9168 22.9166 21.9793 22.9166 20.8335V8.3335C22.9166 7.18766 21.9791 6.25016 20.8333 6.25016ZM10.4166 4.16683H14.5833V6.25016H10.4166V4.16683ZM16.6666 15.6252H13.5416V18.7502H11.4583V15.6252H8.33325V13.5418H11.4583V10.4168H13.5416V13.5418H16.6666V15.6252Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MedicalServicesIcon;
