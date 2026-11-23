import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router";

import ScrollManager from "@/components/layout/ScrollManager";

import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";

export default function AppRouter () {
    return (
        <BrowserRouter>
            <ScrollManager />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

