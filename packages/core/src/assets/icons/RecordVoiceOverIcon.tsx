import React from 'react';

export interface RecordVoiceOverIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RecordVoiceOverIcon = ({ size, ...props }: RecordVoiceOverIconProps) => {
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
      
<path d="M9.37569 14.0625C11.6769 14.0625 13.5424 12.197 13.5424 9.89579C13.5424 7.59461 11.6769 5.72913 9.37569 5.72913C7.0745 5.72913 5.20902 7.59461 5.20902 9.89579C5.20902 12.197 7.0745 14.0625 9.37569 14.0625Z" fill="currentColor"/>
<path d="M9.37569 16.1458C6.59444 16.1458 1.04236 17.5416 1.04236 20.3125V22.3958H17.709V20.3125C17.709 17.5416 12.1569 16.1458 9.37569 16.1458ZM17.459 6.10413L15.709 7.86454C16.584 9.09371 16.584 10.6875 15.709 11.9166L17.459 13.677C19.5632 11.5729 19.5632 8.39579 17.459 6.10413ZM20.9069 2.60413L19.209 4.30204C22.0944 7.44788 22.0944 12.177 19.209 15.4895L20.9069 17.1875C24.9694 13.1354 24.9799 6.82288 20.9069 2.60413Z" fill="currentColor"/>
    </svg>
  );
};

export default RecordVoiceOverIcon;
