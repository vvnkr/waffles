import Icon from './icon-base';

type TwitterBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function TwitterBrand({ size, ...restProps }: TwitterBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M15.8644,5.3498 C15.8716,5.4956 15.8743,5.6432 15.8743,5.789 C15.8743,10.28 12.457,15.4568 6.2083,15.4568 C4.2886,15.4568 2.5039,14.8943 1,13.9295 C1.2664,13.961 1.5364,13.9772 1.81,13.9772 C3.403,13.9772 4.8673,13.4336 6.0292,12.5237 C4.5433,12.4958 3.2878,11.5148 2.8558,10.1648 C3.0628,10.2035 3.2761,10.2242 3.4948,10.2242 C3.8053,10.2242 4.1059,10.1837 4.3903,10.1063 C2.836,9.7931 1.6651,8.4206 1.6651,6.7736 C1.6651,6.7592 1.6651,6.7457 1.6651,6.7313 C2.1232,6.986 2.6479,7.139 3.2041,7.157 C2.2924,6.5468 1.6921,5.5082 1.6921,4.3283 C1.6921,3.7064 1.8595,3.1223 2.1529,2.6201 C3.8278,4.6766 6.3325,6.0284 9.1558,6.1706 C9.0982,5.9213 9.0685,5.663 9.0685,5.3957 C9.0685,3.5201 10.5886,2 12.4651,2 C13.4425,2 14.3254,2.4113 14.9455,3.0719 C15.7186,2.9189 16.4458,2.6363 17.1028,2.2475 C16.849,3.0404 16.3099,3.7064 15.6088,4.1267 C16.2964,4.0439 16.9498,3.863 17.56,3.5921 C17.1046,4.2743 16.5286,4.8719 15.8644,5.3498 Z"
      />
    </Icon>
  );
}

export default TwitterBrand;
