import React from 'react';

export interface EmojiEventsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EmojiEventsIcon = ({ size, ...props }: EmojiEventsIconProps) => {
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
      
<path d="M19.7917 5.20833H17.7083V3.125H7.29167V5.20833H5.20833C4.0625 5.20833 3.125 6.14583 3.125 7.29167V8.33333C3.125 10.9896 5.125 13.1562 7.69792 13.4792C8.35417 15.0417 9.76042 16.2187 11.4583 16.5625V19.7917H7.29167V21.875H17.7083V19.7917H13.5417V16.5625C15.2396 16.2187 16.6458 15.0417 17.3021 13.4792C19.875 13.1562 21.875 10.9896 21.875 8.33333V7.29167C21.875 6.14583 20.9375 5.20833 19.7917 5.20833ZM5.20833 8.33333V7.29167H7.29167V11.2708C6.08333 10.8333 5.20833 9.6875 5.20833 8.33333ZM19.7917 8.33333C19.7917 9.6875 18.9167 10.8333 17.7083 11.2708V7.29167H19.7917V8.33333Z" fill="currentColor"/>
    </svg>
  );
};

export default EmojiEventsIcon;
