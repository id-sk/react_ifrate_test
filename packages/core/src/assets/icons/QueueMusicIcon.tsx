import React from 'react';

export interface QueueMusicIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const QueueMusicIcon = ({ size, ...props }: QueueMusicIconProps) => {
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
        d="M15.1041 5.20837H2.60413V7.29171H15.1041V5.20837ZM15.1041 9.37504H2.60413V11.4584H15.1041V9.37504ZM2.60413 15.625H10.9375V13.5417H2.60413V15.625ZM17.1875 5.20837V13.7292C16.8645 13.6146 16.5104 13.5417 16.1458 13.5417C14.4166 13.5417 13.0208 14.9375 13.0208 16.6667C13.0208 18.3959 14.4166 19.7917 16.1458 19.7917C17.875 19.7917 19.2708 18.3959 19.2708 16.6667V7.29171H22.3958V5.20837H17.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QueueMusicIcon;
