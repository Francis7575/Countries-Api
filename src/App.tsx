import { Suspense } from "react";
import { RouterProvider } from "react-router-dom"
import LoadingPage from "./pages/LoadingPage";
import { PAGE_DATA } from "./utils/pageData";

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={PAGE_DATA} />
    </Suspense>
  )
}

export default App