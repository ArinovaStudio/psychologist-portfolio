import React from 'react'
import Layout from "@/components/layouts/Layout";

export default function layout({children}: React.PropsWithChildren) {
  return <Layout>{children}</Layout>
}
