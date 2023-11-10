import { Outlet } from "react-router-dom"
import s from './RootLayout.module.css'

export const RootLayout = () => (   
    <main className={s.pageRoot}>
        <article className={s.pagesContainer}>
            <Outlet />
        </article>
    </main>
)
