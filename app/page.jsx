import Feed from "@components/Feed";

export const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br />
      <span className="orange_gradient text-center">
        AI-Powered Prompts </span>
    </h1>
    <p className="desc text-center">
      Promptopia is an opensource AI to the modern world to discover, create and share creative prompts
    </p>

    <Feed/>
   </section>

  )
}

export default Home;
