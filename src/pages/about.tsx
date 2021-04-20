import Layout from "../components/Layout";

interface aboutProps {}


const about: React.FC<aboutProps> = () => {
    return (
        <Layout pageTitle="about">
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, libero debitis sit vitae doloribus. Recusandae, quaerat vero. Quod, cumque sed. Tenetur in officiis delectus recusandae iure? In, dolores id.</p>
        </Layout>
    )
}

export default about