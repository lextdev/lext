import { HeadingSizesProps } from "../../styles/HeadingSizes";

const GetHeadingSizeValue = (
  size?: keyof HeadingSizesProps | number,
  sizes?: HeadingSizesProps,
) => {
  if (!size || !sizes) {
    return undefined;
  }

  if (typeof size === "number") {
    return size;
  } else {
    return sizes[size];
  }
};

export default GetHeadingSizeValue;
