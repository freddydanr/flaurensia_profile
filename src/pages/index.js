import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MyComponent = () => {
  const [counter, setCounter] = React.useState(0)

  const addCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={addCounter}>Click this</button>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Layout>
)

export default IndexPage
