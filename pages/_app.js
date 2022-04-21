import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="container mx-auto mt-4 max-w-[1100px]">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
