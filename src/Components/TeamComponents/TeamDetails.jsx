import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import image1 from "../../assets/spark.webp";
import image2 from "../../assets/rentals.webp";
import image3 from "../../assets/digital1.webp";


const team = {
  "ihenwosu-stephen": {
    name: "Ihenwosu C. Stephen",
    role: "Brand Strategist",
    image: image1,
    slug: "ihenwosu-stephen",

    intro:
      "Building brands that are clear, distinctive and impossible to ignore.",

    bio: [
      "Stephen is a brand strategist passionate about helping businesses find clarity in an increasingly competitive environment.",

      "At Siluxri, he works across strategy, branding and digital marketing to transform ideas into experiences that connect with people and create meaningful business outcomes.",
    ],

    expertise: [
      "Brand Strategy",
      "Digital Marketing",
      "Creative Direction",
      "Campaign Strategy",
    ],

    instagram: "#",
    linkedin: "#",
  },

  "creative-director": {
    name: "Team Member",
    role: "Creative Director",
    image: image2,
    slug: "team-member",

    intro:
      "Turning ideas into visual experiences people remember.",

    bio: [
      "A creative thinker with a passion for visual storytelling and distinctive brand experiences.",

      "At Siluxri, their work brings together creativity, design and strategy to create work that feels both beautiful and purposeful.",
    ],

    expertise: [
      "Creative Direction",
      "Visual Identity",
      "Campaign Design",
      "Art Direction",
    ],

    instagram: "#",
    linkedin: "#",
  },

  "creative-director-2": {
    name: "Team Member 2",
    role: "Creative Director",
    image: image3,
    slug: "team-member",

    intro:
      "Creating meaningful experiences through creativity and strategy.",

    bio: [
      "A creative professional focused on developing ideas that help brands communicate with clarity and personality.",

      "At Siluxri, their work spans creative development, digital experiences and brand communication.",
    ],

    expertise: [
      "Creative Direction",
      "Digital Strategy",
      "Brand Communication",
      "Content Development",
    ],

    instagram: "#",
    linkedin: "#",
  },
};

export default function TeamDetails() {
  const { slug } = useParams();

  // Get the team member using the URL slug
  const member = team[slug];

  // If the slug doesn't exist
  if (!member) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-magenta">
            404
          </p>

          <h1 className="text-4xl font-medium text-blue">
            Team member not found.
          </h1>

          <Link
            to="/team"
            className="mt-8 inline-flex border-b border-blue pb-2 text-sm uppercase tracking-wider text-blue transition-colors hover:text-magenta"
          >
            Back to team
          </Link>

        </div>
      </section>
    );
  }

  return (
    <main className="bg-white">

      {/* =========================
          HERO
      ========================== */}
      <section className="bg-blue px-6 py-12 text-white sm:px-8 md:px-12 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <Link
            to="/team"
            className="group mb-16 inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />

            Back to team
          </Link>


          {/* Hero Content */}
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-skyblue">
                {member.role}
              </p>

              <h1 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                {member.name}
              </h1>

            </motion.div>


            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="max-w-lg text-xl leading-8 text-white/60 lg:justify-self-end"
            >
              {member.intro}
            </motion.p>

          </div>

        </div>

      </section>


      {/* =========================
          PROFILE
      ========================== */}
      <section className="px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">


          {/* Image + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:sticky lg:top-24 lg:self-start"
          >

            {/* Image */}
            <div className="overflow-hidden rounded-2xl bg-skyblue/20">

              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover"
              />

            </div>


            {/* Social Icons */}
            <div className="mt-5 flex gap-3">

              <a
                href={member.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue/15 text-blue transition-all hover:bg-blue hover:text-white"
                aria-label={`${member.name} Instagram`}
              >
                <FiInstagram />
              </a>


              <a
                href={member.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue/15 text-blue transition-all hover:bg-blue hover:text-white"
                aria-label={`${member.name} LinkedIn`}
              >
                <FiLinkedin />
              </a>

            </div>

          </motion.div>


          {/* Content */}
          <div>

            {/* About */}
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-magenta">
              About
            </p>


            <div className="space-y-6">

              {member.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-2xl text-xl leading-9 text-blue/70 sm:text-2xl"
                >
                  {paragraph}
                </p>
              ))}

            </div>


            {/* Expertise */}
            <div className="mt-20 border-t border-blue/15 pt-8">

              <p className="mb-8 text-xs uppercase tracking-[0.25em] text-blue/40">
                Expertise
              </p>


              <div className="grid gap-4 sm:grid-cols-2">

                {member.expertise.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-blue/10 pb-4"
                  >

                    <span className="text-xs text-orange">
                      0{index + 1}
                    </span>

                    <span className="text-lg text-blue">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="bg-magenta px-6 py-20 text-white sm:px-8 md:px-12 lg:px-16 lg:py-28">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/50">
              Next
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Meet the rest
              <span className="block text-white/40">
                of the team.
              </span>
            </h2>

          </div>


          <Link
            to="/team"
            className="group inline-flex w-fit items-center gap-4 border-b border-white/40 pb-2 text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:border-white"
          >

            View all team members

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}