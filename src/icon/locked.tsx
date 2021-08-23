import Icon from './icon-base';

type LockedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Locked({ size, ...restProps }: LockedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6,6 L6,3 C6,1.44793435 7.44667616,2.84217094e-14 8.99821298,2.84217094e-14 C10.5497468,2.84217094e-14 11.9962518,1.44793128 11.9962518,3 L11.9962518,6 L13,6 C14.1045695,6 15,6.8954305 15,8 L15,16 C15,17.1045695 14.1045695,18 13,18 L5,18 C3.8954305,18 3,17.1045695 3,16 L3,8 C3,6.8954305 3.8954305,6 5,6 L6,6 Z M9.99625179,6 L9.99625179,3 C9.99625179,2.55205978 9.44473583,2 8.99821298,2 C8.55163506,2 8,2.55211482 8,3 L8,6 L9.99625179,6 Z M5,8 L5,16 L13,16 L13,8 L5,8 Z M9,10 C9.55228475,10 10,10.4477153 10,11 L10,13 C10,13.5522847 9.55228475,14 9,14 C8.44771525,14 8,13.5522847 8,13 L8,11 C8,10.4477153 8.44771525,10 9,10 Z"
      />
    </Icon>
  );
}

export default Locked;
