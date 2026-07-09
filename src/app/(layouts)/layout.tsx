import { AppShell } from '@/components/layout/app-shell'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AppShell>{children}</AppShell>
        </>
    )
}

export default Layout