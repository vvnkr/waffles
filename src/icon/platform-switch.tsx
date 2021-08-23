import Icon from './icon-base';

type PlatformSwitchProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PlatformSwitch({ size, ...restProps }: PlatformSwitchProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5,0 C18.0522847,0 18.5,0.44771525 18.5,1 L18.5,17 C18.5,17.5522847 18.0522847,18 17.5,18 L8.5,18 C7.94771525,18 7.5,17.5522847 7.5,17 L7.5,1 C7.5,0.44771525 7.94771525,0 8.5,0 L17.5,0 Z M16.5,2 L9.5,2 L9.5,16 L16.5,16 L16.5,2 Z M6.5,14 L6.5,16 L5,16 C4.44771525,16 4,15.5522847 4,15 C4,14.4477153 4.44771525,14 5,14 L6.5,14 Z M13.5,13 C14.0522847,13 14.5,13.4477153 14.5,14 C14.5,14.5522847 14.0522847,15 13.5,15 L12.5,15 C11.9477153,15 11.5,14.5522847 11.5,14 C11.5,13.4477153 11.9477153,13 12.5,13 L13.5,13 Z M6.5,2 L6.5,4 L2,4 L2,11 L6.5,11 L6.5,13 L1,13 C0.44771525,13 0,12.5522847 0,12 L0,3 C0,2.44771525 0.44771525,2 1,2 L6.5,2 Z"
      />
    </Icon>
  );
}

export default PlatformSwitch;
