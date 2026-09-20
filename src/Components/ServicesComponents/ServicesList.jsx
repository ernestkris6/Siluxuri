import { motion } from "framer-motion";
import { LuFingerprint, LuCamera, LuMonitorSmartphone, LuChartNoAxesCombined } from "react-icons/lu";


const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We build result oriented brand strategies that convey what makes your company unique. We ensure that your brand stands out both offline and online. We integrate digital marketing strategies, including social media, SEO, and content marketing, into our branding approach to ensure your brand reaches its target audience effectively.",
      icon: <LuChartNoAxesCombined />,
  },
  {
    number: "02",
    title: "Identity Design",
    description:
      "From logo design to color palettes and typography, we craft designs that not only look good but also resonate with your audience. We understand the psychology behind design and ensure that our visuals appeal to the market while being optimized for digital platforms. Everything we create, from logos to marketing materials, is developed with the goal of delivering a seamless brand experience across both traditional and digital channels.",
      icon: <LuFingerprint />,
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Our digital marketing services complement our branding work by enhancing online visibility and driving engagement. This includes social media management, paid advertising (Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads), email marketing, and content creation. We aim to provide integrated marketing solutions that help brands expand their reach and grow their business in the digital space.",
      icon: <LuMonitorSmartphone />,
  },
  {
    number: "04",
    title: "Equipment Rental",
    description:
      "We provide flexible and affordable equipment rental solutions for creators, entrepreneurs, and small businesses that need access to professional tools without the high cost of ownership.",
    icon: <LuCamera />,
  },
];

export default function ServicesList () {
  return (
    <section className="bg-white text-blue px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-blue/15">
        {services.map((service, index) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
            className={`
              group
              py-10
              md:py-14
              pr-6
              md:pr-12
              border-b
              border-blue/15
              ${index % 2 === 0 ? "md:border-r md:pr-12" : "md:pl-12"}
            `}
          >
            <div className="flex items-start justify-between gap-6">
              <span className="text-sm text-blue">
                {service.number}
              </span>

               <div className="flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-blue text-white transition-all duration-500  ">
                    {service.icon}
                  </div>
              {/* <span className="text-[#2F2E41]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <FiArrowUpRight />
              </span> */}
            </div>

            <h3 className="mt-16 text-3xl md:text-4xl font-medium tracking-[-0.035em]">
              {service.title}
            </h3>

            <p className="max-w-md mt-5 text-blue/60 leading-relaxed">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

