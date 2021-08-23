import Icon from './icon-base';

type MedalProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Medal({ size, ...restProps }: MedalProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9,0 C12.3137085,0 15,2.6862915 15,6 C15,7.77658031 14.2278632,9.37281843 13.0008689,10.4714352 L13,17.5410396 L8.997,15.755 L5,17.5423111 L5.0001315,10.4723307 C3.77255645,9.37368593 3,7.77706308 3,6 C3,2.6862915 5.6862915,0 9,0 Z M9,12 C8.29884941,12 7.62578872,11.8797328 7.00032181,11.6587023 L7,14.457 L8.9965533,13.565296 L11,14.459 L11.0006859,11.6583461 C10.3749342,11.8796036 9.70152715,12 9,12 Z M9,2 C6.790861,2 5,3.790861 5,6 C5,8.209139 6.790861,10 9,10 C11.209139,10 13,8.209139 13,6 C13,3.790861 11.209139,2 9,2 Z"
      />
    </Icon>
  );
}

export default Medal;
