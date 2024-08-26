import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import TheHeader from './components/TheHeader/TheHeader'
import { UserProvider } from './context/UserContext/UserState'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { OrdersProvider } from './context/OrdersContext/OrdersState'

function App() {
	return (
		<div className="App">
			<UserProvider>
				<ProductsProvider>
					<OrdersProvider>
						<Router>
							<TheHeader />
							<Routes>
								<Route path="/" element={<Login />} />
								<Route path="/profile" element={<Profile />} />
								<Route path="/products" element={<Products />} />
								<Route path="/cart" element={<Cart />} />
							</Routes>
						</Router>
					</OrdersProvider>
				</ProductsProvider>
			</UserProvider>
		</div>
	)
}
export default App
