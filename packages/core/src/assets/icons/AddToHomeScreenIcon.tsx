import React from 'react';

export interface AddToHomeScreenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddToHomeScreenIcon = ({ size, ...props }: AddToHomeScreenIconProps) => {
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
      
<path d="M19.2708 1.05216L8.85409 1.04175C7.70825 1.04175 6.77075 1.97925 6.77075 3.12508V6.25008H8.85409V5.20841H19.2708V19.7917H8.85409V18.7501H6.77075V21.8751C6.77075 23.0209 7.70825 23.9584 8.85409 23.9584H19.2708C20.4166 23.9584 21.3541 23.0209 21.3541 21.8751V3.12508C21.3541 1.97925 20.4166 1.05216 19.2708 1.05216ZM10.9374 15.6251H13.0208V8.33341H5.72909V10.4167H9.46867L3.64575 16.2397L5.1145 17.7084L10.9374 11.8855V15.6251Z" fill="currentColor"/>
    </svg>
  );
};

export default AddToHomeScreenIcon;
