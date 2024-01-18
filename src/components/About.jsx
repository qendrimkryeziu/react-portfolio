import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nisi
            placeat quod maiores excepturi officiis molestias omnis cumque
            xwbeatae et, provident perferendis sed ratione molestiae deserunt
            vitae similique, tenetur mollitia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt doloribus recusandae deserunt
            non eveniet, sunt eum eos perspiciatis natus sequi, itaque numquam
            consectetur ipsa vitae explicabo dicta ipsum, repellat ab!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
