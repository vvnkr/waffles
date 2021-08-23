import Icon from './icon-base';

type SaveProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Save({ size, ...restProps }: SaveProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M4,2 L2,2 L2,16 L4,16 L4,10 C4,8.8954305 4.8954305,8 6,8 L12,8 C13.1045695,8 14,8.8954305 14,10 L14,16 L16,16 L16,4 L14,2 L13,2 L13,4 C13,5.1045695 12.1045695,6 11,6 L6,6 C4.8954305,6 4,5.1045695 4,4 L4,2 Z M2,0 L14,0 C14.530433,0 15.0391408,0.210713681 15.4142136,0.585786438 L17.4142136,2.58578644 C17.7892863,2.96085919 18,3.46956702 18,4 L18,16 C18,17.1045695 17.1045695,18 16,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,2 C0,0.8954305 0.8954305,0 2,0 Z M6,10 L6,16 L12,16 L12,10 L6,10 Z M6,12 L12,12 L12,14 L6,14 L6,12 Z M6,2 L6,4 L11,4 L11,2 L6,2 Z"
      />
    </Icon>
  );
}

export default Save;
