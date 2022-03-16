import { renderBoolean, renderLink, TableColumnType } from "~/packages/components/ResponsiveTable"
import { ITableMeta } from "~/packages/components/ResponsiveTable/ITableMeta"
import { CourseQueries } from "~/packages/services/Api/Queries/AdminQueries/Courses"

export const getCourseListTableColumns = (isModal = false, CourseID?: number): ITableMeta => {
  const columns: TableColumnType = [
    {
      title: "Title",
      dataIndex: "title",
      render: (text: any, record: any) => renderLink(`/course/${record.id}`, text, isModal),
      sorter: (a: any, b: any) => a.title - b.title
    },
    {
      title: "Course Provider",
      render: (text: any, record: any) =>
        renderLink(`/${record.provider.name}`, record.provider.name, isModal),
      sorter: (a: any, b: any) => {
        if (a.provider.name - b.provider.name) {
          return a.provider.name.length - b.provider.name.length
        }
        return 0
      }
    },
    {
      title: "Slug",
      dataIndex: "slug",
      render: (text: any, record: any) => renderLink(`/${record.slug}`, text, isModal),
      sorter: (a: any, b: any) => a.slug.length - b.slug.length
    },
    {
      title: "Content Ready",
      dataIndex: "content_ready",
      render: (text: any, record: any) => renderBoolean(text)
    }
    // ,
    // {
    //   title: "Actions",
    //   dataIndex: "StatusCode"
    // }
  ]

  return {
    columns,
    searchFunc: CourseQueries.getPaginatedList,
  }
}
