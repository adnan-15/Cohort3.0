import { createRoot } from 'react-dom/client'
import './index.css'
import TanStack from './Infinite.jsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <TanStack />
    </QueryClientProvider>
)
