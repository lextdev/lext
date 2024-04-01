# Lext/Form Management

A brief description of your project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```bash
npm install @lextdev/form
```

## Usage

```tsx
import { Button, SafeAreaView, TextInput } from "@lextdev/core"
import { Controller, useForm, useResolver } from "@lextdev/form"
import React from "react"

const Main = () => {
  const { validateResolver, validate } = useResolver()

  const scheme = validate.object({
    name: validate.string().email("Not Email").required("This is required"),
  })
  
  const form = useForm({
    defaultValues: {
      name: "",
    },
    resolver: validateResolver(scheme),
  })

  return (
    <SafeAreaView backgroundColor="background">
      <Controller
        name="name"
        control={form.control}
        rules={{
          required: "This is required",
        }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <TextInput
            error={error?.message}
            label="Your Email Address"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )} 
      />

      <Button
        label="Submit"
        onPress={form.handleSubmit((item) => console.log(item))}
      />
    </SafeAreaView>
  )
}

export default Main

```

