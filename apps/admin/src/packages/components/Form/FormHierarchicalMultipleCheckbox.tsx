import React, { useState, useEffect } from "react"
import { SearchFieldWrapper, IGeneratedField } from "~/packages/components/Form/common"
import { Tree } from "antd"

export function FormHierarchicalMultipleCheckbox(props: IGeneratedField) {
  const [checkedKeys, setCheckedKeys] = useState(props.defaultValue)
  const { formInstance, fieldName } = props

  useEffect(() => {
    if (fieldName && formInstance && checkedKeys)
      formInstance.setFieldsValue({
        [fieldName]: checkedKeys
      })
    // eslint-disable-next-line
  }, [checkedKeys])

  const handleCheck = (checkedKeysValue: any) => {
    setCheckedKeys(checkedKeysValue);
  };

  const treeProps = {
    treeData: props.options,
    checkedKeys: checkedKeys,
    checkable: true,
    onCheck: handleCheck,
    multiple: true,
    defaultExpandAll: true,
    selectable: false,
  };

  return (
    <SearchFieldWrapper {...props}>
      <div style={{ border: "1px solid lightgray", padding: "5px" }}>
        <Tree {...treeProps} />
      </div>
    </SearchFieldWrapper>
  )
}
