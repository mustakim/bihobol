import Layout from "../components/Layout";

interface homeProps {}


const Home: React.FC<homeProps> = () => {
    return (
        <Layout pageTitle="Home">
            <h1>Its home page</h1>
        </Layout>
    )
}

export default Home