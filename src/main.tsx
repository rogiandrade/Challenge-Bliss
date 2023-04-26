import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PreviewQuestion } from './components/previewQuestion'
import ErrorPage from './components/errorPage'
import { Result } from './components/results'
import Root from './components'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <PreviewQuestion />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home/:question",
        element: <PreviewQuestion />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home/question/:id",
        element: <Result />,
        errorElement: <ErrorPage />
    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    
)
