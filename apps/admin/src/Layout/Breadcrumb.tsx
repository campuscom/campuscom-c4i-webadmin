import React, { useEffect, useState } from "react"
import { Breadcrumb as AntdBreadcrumb } from "antd"
import { Link, useLocation } from "react-router-dom"
import { eventBus } from "~/packages/utils/EventBus"
import { transformToLabel } from "~/packages/utils/util"

export const REFRESH_BREADCRUMB = "REFRESH_BREADCRUMB"

interface IBreadcrumbPath {
  label: string | number
  path: string
}

const generateBreadcrumbPath = (path: string): IBreadcrumbPath[] => {
  const breadcrumbPaths: Array<IBreadcrumbPath> = [{ path: "/", label: "Home" }]
  if (path === "/") return breadcrumbPaths

  const routesFollowingHome = path.split("/").slice(1)
  routesFollowingHome.reduce((path, route) => {
    let convertedRoute: string | number = route
    if (!isNaN(Number(route))) {
      convertedRoute = Number(route)
    }
    if (path === breadcrumbPaths[0].path) {
      path += route
    } else {
      path = `${path}/${route}`
    }

    breadcrumbPaths.push({ path, label: transformToLabel(convertedRoute) })
    return path
  }, breadcrumbPaths[0].path)

  return breadcrumbPaths
}

export function Breadcrumb() {
  const location = useLocation()

  const [breadcrumbPaths, setBreadcrumbPaths] = useState<Array<IBreadcrumbPath>>([])

  const callNeccessaryApis = async () => {
    const tempBreadcrumbPaths = generateBreadcrumbPath(location.pathname)
    setBreadcrumbPaths(tempBreadcrumbPaths)
  }
  useEffect(() => {
    eventBus.subscribe(REFRESH_BREADCRUMB, callNeccessaryApis)
    eventBus.publish(REFRESH_BREADCRUMB)
    return () => eventBus.unsubscribe(REFRESH_BREADCRUMB)
    // eslint-disable-next-line
  }, [location.pathname])

  return (
    <AntdBreadcrumb style={{ margin: "16px 0" }}>
      {breadcrumbPaths.map((item, i) => (
        <AntdBreadcrumb.Item key={i}>
          <Link to={item.path}>{item.label}</Link>
        </AntdBreadcrumb.Item>
      ))}
    </AntdBreadcrumb>
  )
}
