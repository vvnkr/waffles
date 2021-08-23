import Icon from './icon-base';

type DesktopProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Desktop({ size, ...restProps }: DesktopProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12,14 C12.5522847,14 13,14.4477153 13,15 C13,15.5522847 12.5522847,16 12,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L12,14 Z M17,2 C17.5522847,2 18,2.44771525 18,3 L18,12 C18,12.5522847 17.5522847,13 17,13 L1,13 C0.44771525,13 0,12.5522847 0,12 L0,3 C0,2.44771525 0.44771525,2 1,2 L17,2 Z M16,4 L2,4 L2,11 L16,11 L16,4 Z"
      />
    </Icon>
  );
}

export default Desktop;
