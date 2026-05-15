import React from 'react';

export interface FolderDeleteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderDeleteIcon = ({ size, ...props }: FolderDeleteIconProps) => {
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
        d="M22.9167 8.33341V18.7501C22.9167 19.8959 21.9792 20.8334 20.8334 20.8334H4.16671C3.02087 20.8334 2.08337 19.8959 2.08337 18.7501L2.09379 6.25008C2.09379 5.10425 3.02087 4.16675 4.16671 4.16675H10.4167L12.5 6.25008H20.8334C21.9792 6.25008 22.9167 7.18758 22.9167 8.33341ZM17.1875 10.4167V9.37508H15.1042V10.4167H12.5V11.9792H13.5417V16.1459C13.5417 17.0105 14.2396 17.7084 15.1042 17.7084H17.1875C18.0521 17.7084 18.75 17.0105 18.75 16.1459V11.9792H19.7917V10.4167H17.1875ZM17.1875 16.1459H15.1042V11.9792H17.1875V16.1459Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FolderDeleteIcon;
