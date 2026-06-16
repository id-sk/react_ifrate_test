import React from 'react';

export interface MedicalInformationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MedicalInformationIcon = ({ size, ...props }: MedicalInformationIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M20.8333 7.29183H15.6249V4.16683C15.6249 3.021 14.6874 2.0835 13.5416 2.0835H11.4583C10.3124 2.0835 9.37492 3.021 9.37492 4.16683V7.29183H4.16659C3.02075 7.29183 2.08325 8.22933 2.08325 9.37516V20.8335C2.08325 21.9793 3.02075 22.9168 4.16659 22.9168H20.8333C21.9791 22.9168 22.9166 21.9793 22.9166 20.8335V9.37516C22.9166 8.22933 21.9791 7.29183 20.8333 7.29183ZM11.4583 4.16683H13.5416V9.37516H11.4583V4.16683ZM11.4583 16.6668H9.37492V18.7502H7.29159V16.6668H5.20825V14.5835H7.29159V12.5002H9.37492V14.5835H11.4583V16.6668ZM13.5416 15.1043V13.5418H19.7916V15.1043H13.5416ZM13.5416 18.2293V16.6668H17.7083V18.2293H13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default MedicalInformationIcon;
