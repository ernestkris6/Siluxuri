import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import image1 from "../../assets/spark.webp";
import image2 from "../../assets/rentals.webp";
import image3 from "../../assets/digital1.webp";
import { Link } from "react-router";

const team = [
  {
    name: "Ihenwosu C. Stephen",
    slug: "ihenwosu-stephen",
    role: "Brand Strategist",
    image: image1,
  },
  {
    name: "Team Member",
    slug: "team-member",
    role: "Creative Director",
    image: image2,
  },
  {
    name: "Team Member 2",
    slug: "team-member-2",
    role: "Creative Director",
    image: image3,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-7xl">

        {/* Intro */}
        <div className="mb-20 grid gap-10 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-magenta">
              The team
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-blue sm:text-5xl md:text-6xl">
              Different minds.
              <span className="block text-orange/90">
                One creative direction.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-blue/60 md:justify-self-end">
            We bring together different perspectives, skills and experiences
            to create work that connects brands with the people they want
            to reach.
          </p>

        </div>


        {/* Team Grid */}
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">

          {team.map((member, index) => (

            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="group"
            >
            
            <Link to={`/team/${member.slug}`} className="block">
              {/* Image */}
              <div className="relative aspect-[2/2.2] overflow-hidden rounded-2xl bg-skyblue/30">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover */}
                <div className="absolute inset-0 flex items-end justify-end bg-blue/0 p-5 transition-colors duration-500 group-hover:bg-blue/20">

                  <div className="flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-blue opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <FiArrowUpRight />
                  </div>

                </div>

              </div>


              {/* Details */}
              <div className="mt-5 flex items-start justify-between gap-4 border-t border-blue/15 pt-4">

                <div>
                  <h3 className="text-lg font-medium text-blue">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm text-blue/50">
                    {member.role}
                  </p>
                </div>

                <span className="text-xs text-blue/30">
                  0{index + 1}
                </span>

              </div>

            </Link>
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}