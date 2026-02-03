import React from 'react'
import ScrollToTop from '@/components/wrapper/ScrollToTop'
export default function layout({children}:React.PropsWithChildren) {
    return <ScrollToTop>{children}</ScrollToTop>
}
