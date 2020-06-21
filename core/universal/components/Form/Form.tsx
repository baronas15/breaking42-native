import { lensPath, set } from 'ramda'
import { useState } from 'react'

import { FormStep } from './FormStep'

interface IData {
  _meta: {
    step: string
    isValid: boolean
  }
  data: {
    [key: string]: any
  }
}

export function Form({
  render,
  initial,
  onSubmit,
}: {
  render: any
  initial: any
  onSubmit: Function
}) {
  const [data, setData] = useState<IData>({
    _meta: { step: initial.step, isValid: initial.isValid || false },
    data: {},
  })

  const updateForm = ({
    key,
    value,
    numeric,
    required,
    nextStep,
  }: {
    key: string
    value: any
    numeric?: boolean
    required?: boolean
    nextStep?: string
  }) => {
    const requiredValid = required ? !!value : true
    const numericValid = numeric ? !isNaN(+value) : true
    const isValid = requiredValid && numericValid

    const newData = {
      ...data,
      _meta: {
        ...data._meta,
        isValid: data._meta.isValid && isValid,
        ...(nextStep ? { step: nextStep } : {}),
      },
    }

    const keyLens = lensPath(['data', ...key.split('.')])

    const valueToUpdate = numeric && numericValid ? +value : value
    const updateKey = set(keyLens, valueToUpdate, newData)

    setData(updateKey)
  }

  const renderProp = render({ updateForm, next, submit, data: data.data })
  const children = renderProp.props.children || []

  const step = children.find(
    (x: any) => x.type === FormStep && x.props.identifier === data._meta.step,
  )

  function next(key: string) {
    const delta = {
      ...data,
      _meta: {
        ...data._meta,
        step: key,
      },
    }

    setData(delta)
  }

  function submit() {
    onSubmit(data.data)
  }

  return step
}
