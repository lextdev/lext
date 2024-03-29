import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const useResolver = () => {
  const validateResolver = yupResolver

  const validate = yup

  return {
    validateResolver,
    validate: {
      ...validate,
    },
  }
}

export default useResolver
