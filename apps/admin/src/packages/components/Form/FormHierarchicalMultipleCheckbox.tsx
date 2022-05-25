import React, { useState, useEffect } from "react"
import { SearchFieldWrapper, IGeneratedField } from "~/packages/components/Form/common"
import { Tree } from "antd"

export function FormHierarchicalMultipleCheckbox(props: IGeneratedField & { treeData?: any[]; }) {

  const [checkedKeys, setCheckedKeys] = useState(props.defaultValue)

  const { formInstance, fieldName } = props

  useEffect(() => {
    if (fieldName && formInstance && checkedKeys)
      formInstance.setFieldsValue({
        [fieldName]: checkedKeys
      })
  }, [checkedKeys, formInstance, fieldName])

  const handleCheck = (checkedKeysValue: any) => {
    setCheckedKeys(checkedKeysValue);
  };

  const treeProps = {
    treeData: props.treeData,
    checkedKeys: checkedKeys,
    checkable: true,
    onCheck: handleCheck,
    multiple: true,
    defaultExpandAll: true,
    selectable: false,
    fieldNames: { key: 'key', children: 'submenu', title: 'title' }
  };

  return (
    <SearchFieldWrapper {...props}>
      <Tree {...treeProps} />
    </SearchFieldWrapper>
  )
}
