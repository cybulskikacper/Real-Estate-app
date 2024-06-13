import NavBar from './components/navbar/Navbar'
import './layout.scss'
import HomePage from './routes/homePage/homePage'
import ListPage from './routes/listPage/listPage'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/list',
			element: <ListPage />,
		},
	])

	return (
		// <div className="layout">
		// 	<div className="navbar">
		// 		<NavBar />
		// 	</div>

		// 	<div className="content">
		// 		<HomePage />
		// 	</div>
		// </div>\

		<RouterProvider router={router} />
	)
}

export default App
