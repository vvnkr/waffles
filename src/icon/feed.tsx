import Icon from './icon-base';

type FeedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Feed({ size, ...restProps }: FeedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M1,8 C0.44771525,8 1.42108547e-14,7.55228475 1.42108547e-14,7 C1.42108547e-14,6.44771525 0.44771525,6 1,6 C6.57804594,6 12,11.4356495 12,17 C12,17.5522847 11.5522847,18 11,18 C10.4477153,18 10,17.5522847 10,17 C10,12.5390911 5.4723454,8 1,8 Z M1,3 C0.44771525,3 1.42108547e-14,2.55228475 1.42108547e-14,2 C1.42108547e-14,1.44771525 0.44771525,1 1,1 C9.09064377,1 17,8.92933471 17,17 C17,17.5522847 16.5522847,18 16,18 C15.4477153,18 15,17.5522847 15,17 C15,10.0327763 7.98494323,3 1,3 Z M3,16 C3.55228475,16 4,15.5522847 4,15 C4,14.4477153 3.55228475,14 3,14 C2.44771525,14 2,14.4477153 2,15 C2,15.5522847 2.44771525,16 3,16 Z M3,18 C1.34314575,18 0,16.6568542 0,15 C0,13.3431458 1.34314575,12 3,12 C4.65685425,12 6,13.3431458 6,15 C6,16.6568542 4.65685425,18 3,18 Z"
      />
    </Icon>
  );
}

export default Feed;
