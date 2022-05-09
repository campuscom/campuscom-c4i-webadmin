import { IField, DROPDOWN, TEXTAREA, BOOLEAN, TEXT } from "~/packages/components/Form/common"
import { ExternalEntityQueries } from "~/packages/services/Api/Queries/AdminQueries/ExternalEntities"
// import { getResourceType } from "~/ApiServices/Service/RefLookupService"

const COMMON_CONFIGS: Pick<IField, 'renderDependencies' | 'onDependencyChange'> = {
  renderDependencies: ['external_entity',],
  onDependencyChange: (value, {formLookupData}) => {
    const matchedField = (formLookupData?.['external_entity'] as any[] || []).find(o => o.value === value?.['external_entity'])
    return matchedField?.label === 'Avatax' || matchedField?.label === 'Hubspot'
  }
}

const COMMON_EMAIL_RECEIPT_CONFIGS: Pick<IField, 'renderDependencies' | 'onDependencyChange'> = {
  renderDependencies: ['external_entity',],
  onDependencyChange: (value, {formLookupData}) => (formLookupData?.['external_entity'] as any[] || []).find(o => o.value === value?.['external_entity'])?.label === 'Email Receipt'
}

const COMMON_CHECKOUT_CONFIGS: Pick<IField, 'renderDependencies' | 'onDependencyChange'> = {
  renderDependencies: ['external_entity',],
  onDependencyChange: (value, {formLookupData}) => (formLookupData?.['external_entity'] as any[] || []).find(o => o.value === value?.['external_entity'])?.label === 'Checkout Configuration'
}

const COMMON_CHECKOUT_STATUS_CONFIGS: Pick<IField, 'renderDependencies' | 'onDependencyChange'> = {
  renderDependencies: ['external_entity',],
  onDependencyChange: (value, {formLookupData}) => (formLookupData?.['external_entity'] as any[] || []).find(o => o.value === value?.['external_entity'])?.label === 'Checkout Status Configuration'
}

export const getConfigurationTaggingFormMeta = (hasInitialValue?: boolean): IField[] => [
  {
    label: 'Entity Name',
    fieldName: 'external_entity',
    inputType: DROPDOWN,
    refLookupService: ExternalEntityQueries.getLookupData,
    displayKey: "entity_name",
    valueKey: "id",
    rules: [{ required: true, message: "This field is required!" }],
  },
  {
    label: 'Header',
    fieldName: 'config__email_receipt__header',
    inputType: TEXT,
    initialValue: hasInitialValue ? undefined : '',
    ...COMMON_EMAIL_RECEIPT_CONFIGS
  },
  {
    label: 'Footer',
    fieldName: 'config__email_receipt__footer',
    inputType: TEXT,
    initialValue: hasInitialValue ? undefined : '',
    ...COMMON_EMAIL_RECEIPT_CONFIGS
  },
  {
    label: 'Email Receipt',
    fieldName: 'config__email_receipt__email_receipt',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_EMAIL_RECEIPT_CONFIGS
  },
  {
    label: 'Enable Purchase for Myself',
    fieldName: 'config__checkout__enable_purchase_for_myself',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Purchase for Friends and Family',
    fieldName: 'config__checkout__enable_purchase_for_friends_and_family',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Purchase for Both',
    fieldName: 'config__checkout__enable_purchase_for_both',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Purchase for Company ',
    fieldName: 'config__checkout__enable_purchase_for_company',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Profile Question',
    fieldName: 'config__checkout__enable_profile_questions',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Registration Question',
    fieldName: 'config__checkout__enable_registration_questions',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Standalone Product Checkout',
    fieldName: 'config__checkout__enable_standalone_product_checkout',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Registration Product Checkout',
    fieldName: 'config__checkout__enable_registration_product_checkout',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Multiple Product Checkout',
    fieldName: 'config__checkout__enable_multiple_products_checkout',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Enable Enrollment for Multiple Students',
    fieldName: 'config__checkout__enable_enrollment_for_multiple_students',
    inputType: BOOLEAN,
    initialValue: hasInitialValue ? undefined : false,
    ...COMMON_CHECKOUT_CONFIGS
  },
  {
    label: 'Success Redirect Text',
    fieldName: 'config__checkout_status__success_redirect_text',
    inputType: TEXT,
    initialValue: hasInitialValue ? undefined : '',
    ...COMMON_CHECKOUT_STATUS_CONFIGS
  },
  {
    label: 'Success Redirect URL',
    fieldName: 'config__checkout_status__success_redirect_url',
    inputType: TEXT,
    initialValue: hasInitialValue ? undefined : '',
    ...COMMON_CHECKOUT_STATUS_CONFIGS
  },
  {
    label: 'Failure Redirect Text',
    fieldName: 'config__checkout_status__failure_redirect_text',
    inputType: TEXT,
    initialValue: hasInitialValue ? undefined : '',
    ...COMMON_CHECKOUT_STATUS_CONFIGS
  },
  {
    label: 'Failure Redirect URL',
    fieldName: 'config__checkout_status__failure_redirect_url',
    inputType: TEXT,
    initialValue: hasInitialValue ? undefined : '',
    ...COMMON_CHECKOUT_STATUS_CONFIGS
  },
  {
    label: 'Configuration',
    fieldName: 'config_value',
    inputType: TEXTAREA,
    ...COMMON_CONFIGS
  },
]
