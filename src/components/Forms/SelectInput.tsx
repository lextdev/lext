import { useTheme } from "@emotion/react"
import _ from "lodash"
import { FC, useEffect, useState } from "react"
import { UseFormSetValue } from "react-hook-form"
import { FlatList, Image, TouchableOpacity } from "react-native"

import { FormFieldProps } from "./_define"
import Layout from "./_layout"
import ActionButton from "../ActionButton"
import Dropdown from "../Dropdown"
import Group from "../Group"
import { ArrowSmallDown } from "../Icons"
import Text from "../Text"
import React from "react"

type DataProps = {
  image?: string
  label: string
  value: string | null
}

type SelectInputProps = {
  data: DataProps[]
  setValue: UseFormSetValue<any>
}

const SelectInput: FC<FormFieldProps & SelectInputProps> = (props) => {
  const { label, data, error, name, control, setValue, isDisabled } = props

  const LayoutProps = {
    isDisabled,
    label,
    error,
  }

  const [isOpen, setOpen] = useState(false)
  const [getFieldData, setFieldData] = useState<DataProps | null>(null)
  const { defaultOptions, colors } = useTheme()

  const fields = control._formValues as Record<any, any>
  const field = fields[name]

  const onHandlerPress = (data: DataProps) => {
    setOpen(false)
    setFieldData(null)
    setValue(name, data.value)
  }

  const onHandlerSetFieldData = () => {
    if (!getFieldData) {
      const result = _.find(data, { value: field })
      if (result) {
        setFieldData(result)
      } else {
        setFieldData({
          label: "Select",
          value: null,
        })
      }
    }
  }

  useEffect(() => {
    onHandlerSetFieldData()
  }, [getFieldData, setValue])

  return (
    <>
      <TouchableOpacity activeOpacity={1} onPress={() => setOpen(true)}>
        <Layout
          {...LayoutProps}
          right={
            <ActionButton size="sm" variant="transparent" onPress={() => setOpen(true)}>
              <ArrowSmallDown color="black" />
            </ActionButton>
          }
          left={
            getFieldData?.image && (
              <Image
                source={{
                  uri: getFieldData?.image,
                }}
                width={24}
                height={24}
              />
            )
          }
        >
          <Text style={{ flex: 1 }}>{getFieldData?.label}</Text>
        </Layout>
      </TouchableOpacity>
      <Dropdown isOpen={isOpen} setOpen={setOpen}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                minHeight: defaultOptions.minHeight,
                backgroundColor: getFieldData?.value === item.value ? colors.gray[7] : undefined,
                padding: defaultOptions.padding / 3,
                justifyContent: "center",
                gap: defaultOptions.gap,
              }}
              onPress={() => onHandlerPress(item)}
            >
              <Group gap={10}>
                {typeof item.image !== "undefined" && (
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    width={24}
                    height={24}
                  />
                )}
                <Text>{item.label}</Text>
              </Group>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.value ?? "0"}
        />
      </Dropdown>
    </>
  )
}

export default SelectInput
