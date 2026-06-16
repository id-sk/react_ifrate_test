import React from 'react';

export interface AddAlarmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddAlarmIcon = ({ size, ...props }: AddAlarmIconProps) => {
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
      
<path d="M8.20825 3.60425L6.87492 2.0105L2.08325 6.02091L3.427 7.61466L8.20825 3.60425ZM22.9166 6.03133L18.1249 2.0105L16.7812 3.60425L21.5728 7.62508L22.9166 6.03133ZM12.4999 4.23966C7.32284 4.23966 3.12492 8.43758 3.12492 13.6147C3.12492 18.7917 7.31242 22.9897 12.4999 22.9897C17.677 22.9897 21.8749 18.7917 21.8749 13.6147C21.8749 8.43758 17.677 4.23966 12.4999 4.23966ZM12.4999 20.9063C8.46867 20.9063 5.20825 17.6459 5.20825 13.6147C5.20825 9.58342 8.46867 6.323 12.4999 6.323C16.5312 6.323 19.7916 9.58342 19.7916 13.6147C19.7916 17.6459 16.5312 20.9063 12.4999 20.9063ZM13.5416 9.448H11.4583V12.573H8.33325V14.6563H11.4583V17.7813H13.5416V14.6563H16.6666V12.573H13.5416V9.448Z" fill="currentColor"/>
    </svg>
  );
};

export default AddAlarmIcon;
