import { TextSizesProps } from "../types";

const GetTextSizeValue = (
  size?: keyof TextSizesProps | number,
  sizes?: TextSizesProps
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

export default GetTextSizeValue;
