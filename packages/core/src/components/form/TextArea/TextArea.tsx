import { FormTextInputComponentProps, InputRef } from "@/interfaces"
import { forwardRef } from "react"
import React from "react"
import TextInput from "../TextInput/TextInput"

const TextArea = forwardRef<InputRef, FormTextInputComponentProps>(
  (props, ref) => {
    return (
      <TextInput
        ref={ref}
        multiline={true}
        numberOfLines={4}
        layoutStyle={{
          height: 100,
          paddingVertical: 10,
        }}
        inputStyle={{
          height: "100%",
        }}
        {...props}
      />
    )
  },
)
TextArea.displayName = "TextArea"

export default TextArea
