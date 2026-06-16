import React from 'react';

export interface EditNotificationsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditNotificationsIcon = ({ size, ...props }: EditNotificationsIconProps) => {
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
      
<path d="M17.7916 6.51058L19.6353 8.35433L14.4478 13.5418H12.6041V11.6981L17.7916 6.51058ZM21.1978 6.05225L20.0937 4.94808C19.8853 4.73975 19.5624 4.73975 19.3541 4.94808L18.4687 5.8335L20.3124 7.67725L21.1978 6.79183C21.4062 6.5835 21.4062 6.25016 21.1978 6.05225ZM18.2291 12.7085V17.7085H20.3124V19.7918H3.64575V17.7085H5.72909V10.4168C5.72909 7.51058 7.71867 5.06266 10.4166 4.37516V3.646C10.4166 2.78141 11.1145 2.0835 11.9791 2.0835C12.8437 2.0835 13.5416 2.78141 13.5416 3.646V4.37516C14.3958 4.59391 15.177 4.98975 15.8437 5.51058L10.5208 10.8335V15.6252H15.3124L18.2291 12.7085ZM9.89575 20.8335H14.0624C14.0624 21.9793 13.1249 22.9168 11.9791 22.9168C10.8333 22.9168 9.89575 21.9793 9.89575 20.8335Z" fill="currentColor"/>
    </svg>
  );
};

export default EditNotificationsIcon;
