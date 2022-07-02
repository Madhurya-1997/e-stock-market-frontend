import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups';

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: 'blue', borderRadius: '50%' }} >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? (
              <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white "
                style={{ border: '2px solid black' }}>
                SideBar
              </div>
            ) : (

              <div className="w-0 dark:bg-secondary-dark-bg"
                style={{ border: '2px solid black' }}>
                Sidebar w-0
              </div>
            )
          }
          <div className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              Navbar
            </div>

            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<EStockMarket />} />

                {/* pages  */}
                <Route path="/stocks" element={<Stocks />} />
                <Route path="/company" element={<Companies />} />

                {/* apps  */}
                {/* <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* charts  */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}

              </Routes>
            </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}





export default App;



const EStockMarket = () => <h1>E Stock Market</h1>
const Stocks = () => <h1>Stocks</h1>
const Companies = () => <h1>Companies</h1>