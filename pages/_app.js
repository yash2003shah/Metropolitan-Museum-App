import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import { SSRProvider } from 'react-bootstrap';
import RouteGuard from "../components/RouteGuard";

function MyApp({ Component, pageProps }) {
  return (
    <RouteGuard>
        <Layout>
          <SWRConfig value={{
            fetcher:
            async url => {
            const res = await fetch(url)
            if (!res.ok) {
            const error = new Error('An error occurred while fetching the data.')
            // Attach extra info to the error object.
            error.info = await res.json()
            error.status = res.status
            throw error
            }
            return res.json()
            }
            }}>

              <Component {...pageProps} />
          </SWRConfig>
        </Layout>
      </RouteGuard>
  );
}

export default MyApp;