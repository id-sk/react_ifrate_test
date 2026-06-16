import React from 'react';

export interface AddPhotoAlternateIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddPhotoAlternateIcon = ({ size, ...props }: AddPhotoAlternateIconProps) => {
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
      
<path d="M19.2708 7.81234V10.9269C19.2708 10.9269 17.1979 10.9373 17.1875 10.9269V7.81234H14.0625C14.0625 7.81234 14.0729 5.73942 14.0625 5.729H17.1875V2.604H19.2708V5.729H22.3958V7.81234H19.2708ZM16.1458 11.979V8.854H13.0208V5.729H4.68746C3.54163 5.729 2.60413 6.6665 2.60413 7.81234V20.3123C2.60413 21.4582 3.54163 22.3957 4.68746 22.3957H17.1875C18.3333 22.3957 19.2708 21.4582 19.2708 20.3123V11.979H16.1458ZM4.68746 20.3123L7.81246 16.1457L9.89579 19.2707L13.0208 15.104L17.1875 20.3123H4.68746Z" fill="currentColor"/>
    </svg>
  );
};

export default AddPhotoAlternateIcon;
