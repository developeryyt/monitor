import {useEffect} from "react";
import {authRoutes} from "../routes/index.jsx";
import {Route, Routes} from "react-router";

const App = () => {

  useEffect(() => {
  }, [])


  return (
    <>
      <Routes>
        {
          authRoutes?.map((routes) => {
            return (
                <Route
                    {...routes}
                    key={routes?.['path']}
                />
            )
          })
        }
      </Routes>
    </>
  )
}

export default App
