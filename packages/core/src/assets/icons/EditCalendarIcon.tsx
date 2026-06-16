import React from 'react';

export interface EditCalendarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditCalendarIcon = ({ size, ...props }: EditCalendarIconProps) => {
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
      
<path d="M11.3894 22.3958H4.09774C2.94149 22.3958 2.0144 21.4583 2.0144 20.3125L2.02482 5.72917C2.02482 4.58333 2.94149 3.64583 4.09774 3.64583H5.1394V1.5625H7.22274V3.64583H15.5561V1.5625H17.6394V3.64583H18.6811C19.8269 3.64583 20.7644 4.58333 20.7644 5.72917V11.9792H18.6811V9.89583H4.09774V20.3125H11.3894V22.3958ZM21.9415 17.1771L22.6811 16.4375C23.0873 16.0312 23.0873 15.375 22.6811 14.9687L21.9415 14.2292C21.5352 13.8229 20.879 13.8229 20.4727 14.2292L19.7332 14.9687L21.9415 17.1771ZM21.2019 17.9167L15.6811 23.4375H13.4727V21.2292L18.9936 15.7083L21.2019 17.9167Z" fill="currentColor"/>
    </svg>
  );
};

export default EditCalendarIcon;
