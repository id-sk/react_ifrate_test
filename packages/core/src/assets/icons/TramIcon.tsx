import React from 'react';

export interface TramIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TramIcon = ({ size, ...props }: TramIconProps) => {
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
      
<path d="M19.7916 17.646V8.85433C19.7916 5.94808 17.0728 5.31266 13.5312 5.21891L14.3228 3.646H17.7083V2.0835H7.29159V3.646H12.2395L11.4478 5.22933C8.18742 5.32308 5.20825 5.96891 5.20825 8.85433V17.646C5.20825 19.1564 6.44784 20.4168 7.90617 20.7397L6.24992 22.396V22.9168H8.57283L10.6562 20.8335H14.5833L16.6666 22.9168H18.7499V22.396L17.1874 20.8335H17.1041C18.8645 20.8335 19.7916 19.4064 19.7916 17.646ZM12.4999 19.271C11.6353 19.271 10.9374 18.5731 10.9374 17.7085C10.9374 16.8439 11.6353 16.146 12.4999 16.146C13.3645 16.146 14.0624 16.8439 14.0624 17.7085C14.0624 18.5731 13.3645 19.271 12.4999 19.271ZM17.7083 14.5835H7.29159V9.37516H17.7083V14.5835Z" fill="currentColor"/>
    </svg>
  );
};

export default TramIcon;
