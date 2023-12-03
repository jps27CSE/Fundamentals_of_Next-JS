import Image from "next/image";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <Image
        src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        height={500}
        alt="image"
      />
    </div>
  );
};

export default About;
