import { DataTableAction, DataTableColumn } from "@freshworks/crayons/dist/types/utils/types"
import { TableProps, ColumnType } from "antd/lib/table"
import { Breakpoint } from "antd/lib/_util/responsiveObserve"
import { IQuery } from "~/packages/services/Api/Queries/AdminQueries/Proxy/types"

export { ResponsiveTable } from "~/packages/components/ResponsiveTable/Responsive"
export {
  renderDetailsLink,
  renderLink,
  renderDecimal,
  renderEmail,
  renderDate,
  renderDateTime,
  renderTime,
  renderAmount,
  renderBoolean,
  renderWeek,
  sortByBoolean,
  sortByString,
  sortByTime,
  sortByNumber
} from "~/packages/components/ResponsiveTable/tableUtils"

interface CustomColumnType<RecordType> extends ColumnType<RecordType> {
  columnPosition?: number
  hidden?: boolean
  render2?: (data: any) => React.ReactNode
  customTemplate?: DataTableColumn['customTemplate']
  customHeader?: DataTableColumn['customHeader']
}

export type TableColumnType = CustomColumnType<{ [key: string]: any }>[]

export interface IDataTableProps extends TableProps<{ [key: string]: any }> {
  columns: TableColumnType
  tableName?: string
  searchParams?: any
  searchFunc?: IQuery
  dataLoaded?: (Params: any) => void
  breakpoints?: Breakpoint[]
  isModal?: boolean
  refreshEventName?: string
  rowKey?: string
  hidePagination?: boolean
  hideSettings?: boolean
  hideDownload?: boolean
  disableSorting?: boolean
  currentPagination?: number
  setCurrentPagination?: (page: number) => void
  actions?: React.ReactNode[]
  rowActions?: DataTableAction[]
}
