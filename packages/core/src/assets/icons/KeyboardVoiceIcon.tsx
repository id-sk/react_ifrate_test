import React from 'react';

export interface KeyboardVoiceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardVoiceIcon = ({ size, ...props }: KeyboardVoiceIconProps) => {
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
        d="M12.4999 15.1042C14.2291 15.1042 15.6145 13.7084 15.6145 11.9792L15.6249 5.72925C15.6249 4.00008 14.2291 2.60425 12.4999 2.60425C10.7708 2.60425 9.37492 4.00008 9.37492 5.72925V11.9792C9.37492 13.7084 10.7708 15.1042 12.4999 15.1042ZM18.0208 11.9792C18.0208 15.1042 15.3749 17.2917 12.4999 17.2917C9.62492 17.2917 6.97908 15.1042 6.97908 11.9792H5.20825C5.20825 15.5417 8.04159 18.4688 11.4583 18.9792V22.3959H13.5416V18.9792C16.9583 18.4792 19.7916 15.5417 19.7916 11.9792H18.0208Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardVoiceIcon;
