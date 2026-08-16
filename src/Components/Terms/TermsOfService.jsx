import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const terms = [
  {
    number: "01",
    title: "Project Acceptance",
    content: (
      <>
        <p>
          Siluxri Creative Studio will provide the customer with a written
          estimate or quotation by email at the time of proposal. A copy of
          the written estimate or quotation is to be signed and dated by the
          customer to indicate acceptance and should be returned to Siluxri
          Creative Studio.
        </p>

        <p>
          Alternatively, the client may send an official purchase order in
          reply to the estimate or quotation which binds the client to accept
          our terms and conditions, or an email acknowledging acceptance of
          the quotation.
        </p>

        <p>
          The Terms & Conditions of Siluxri Creative Studio are what govern
          the job, not any conditions on the customer’s purchase order.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Design Charges",
    content: (
      <p>
        Charges for design services to be provided by Siluxri Creative Studio
        will be set out in the written estimate or quotation that is provided
        to the customer. At the time of the customer’s signed acceptance of
        this estimate or quotation, indicating acceptance of the Terms &
        Conditions, a non-refundable payment of 50% of the quoted fee will
        become immediately due. Unless agreed otherwise with the Client, all
        design services require an advance payment of a minimum of fifty (50%)
        of the project quotation total before the work commences or is
        supplied to the Client for review. The remaining fifty (50%) of the
        project quotation total will be due upon completion of the work prior
        to upload to the server or release of materials.
      </p>
    ),
  },

  {
    number: "03",
    title: "Source Files",
    content: (
      <p>
        We will supply proofs and PDF files as appropriate for printing, or
        other graphic files as detailed in the job scope or request. Charges
        for design work do not cover the release of our copyright design
        source files, including but not restricted to indd, psd, AI, png, fla
        or other source files or raw code; if the Client requires these files
        for transfer to an in-house or other designer, they will be subject to
        a separate quotation or ‘buy-out’ charge.
      </p>
    ),
  },

  {
    number: "04",
    title: "Charges for Other Services",
    content: (
      <p>
        Charges for any additional services requested during the project that
        are over and above the estimated time or out of scope, will become
        fully payable (100% of the quoted amount) at the time of estimate or
        quotation acceptance.
      </p>
    ),
  },

  {
    number: "05",
    title: "Payment",
    content: (
      <p>
        The customer will be provided with an Approval Form or Proof Email,
        and an Invoice prior to final publication. At this time the remainder
        of the amount due will become payable and the customer will also be
        required to sign and return the Approval Form or signify approval by
        email to Siluxri Creative Studio. Any invoice queries must be
        submitted by email within 14 days of the invoice date. Accounts which
        remain outstanding for 30 days after the date of invoice, will incur
        late payment interest charge. Payments must be made by online
        transfer. Publication and/or release of work done by Siluxri Creative
        Studio on behalf of the client, may not take place before cleared
        funds have been received.
      </p>
    ),
  },

  {
    number: "06",
    title: "Default",
    content: (
      <>
        <p>
          An account shall be considered default if it remains unpaid for 30
          days from the date of invoice. Siluxri Creative Studio shall be
          entitled to remove Siluxri Creative Studio’s and/or the customer’s
          material from any and all computer systems, until the amount due has
          been fully paid.
        </p>

        <p>
          Removal of such materials does not relieve the customer of its
          obligation to pay the due amount. Customers whose accounts become
          default agree to pay all Siluxri Creative Studio’s reasonable legal
          and accounting expenses and third party collection agency fees in
          the enforcement of the debt and these Terms and Conditions.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Copyrights and Trademarks",
    content: (
      <>
        <p>
          By supplying text, images and other data to Siluxri Creative Studio
          for inclusion in the customer’s website or other medium, the
          customer declares that it holds the appropriate copyright and/or
          trademark permissions.
        </p>

        <p>
          The ownership of such materials will remain with the customer, or
          rightful copyright or trademark owner. Any artwork, images, or text
          supplied and/or designed by Siluxri Creative Studio on behalf of the
          customer, will remain the property of Siluxri Creative Studio
          and/or its suppliers unless otherwise agreed in writing.
        </p>

        <p>
          Any software, code, plugin or other third party material used in a
          web or digital project remains the property of the creator and any
          ongoing license fees or fees for upgrades are the responsibility of
          the client, not Siluxri Creative Studio.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Alterations",
    content: (
      <>
        <p>
          The customer agrees that changes required over and above the
          estimated work, or in addition to the agreed scope, or where the
          client makes changes to the supplied copy or changes required to be
          carried out after acceptance of the draft design, will be liable to
          a separate charge.
        </p>

        <p>
          The customer also agrees that Siluxri Creative Studio holds no
          responsibility for any amendments made by any third party, before or
          after a design is published.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Licensing",
    content: (
      <p>
        Any design, copywriting, drawing, idea or code created for the
        customer by Siluxri Creative Studio, or any of its contractors, is
        licensed for use by the client on a one-time only basis and may not be
        modified, re-used, or re-distributed in any way or form without the
        express written consent of Siluxri Creative Studio and any of its
        relevant sub-contractors.
      </p>
    ),
  },

  {
    number: "10",
    title: "Data Formats",
    content: (
      <p>
        The client agrees to Siluxri Creative Studio’s definition of
        acceptable means of supplying data to the company. Text is to be
        supplied to Siluxri Creative Studio in electronic format as standard
        text (.txt), MS Word (.docx) or via e-mail / FTP or shared folder.
        Images which are supplied in an electronic format are to be provided
        in a format as prescribed by Siluxri Creative Studio.
      </p>
    ),
  },

  {
    number: "11",
    title: "Design Project Duration",
    content: (
      <p>
        Any indication given by Siluxri Creative Studio of a design project’s
        duration is to be considered by the customer to be an estimation.
        Siluxri Creative Studio cannot be held responsible for any project
        overruns, whatever the cause.
      </p>
    ),
  },

  {
    number: "12",
    title: "Rights of Access for Website Construction",
    content: (
      <p>
        The client agrees to allow Siluxri Creative Studio all necessary
        access to computer systems and other locations, as required, in order
        to complete a website project and until all due funds are cleared,
        including the necessary read/write permissions, usernames and
        passwords.
      </p>
    ),
  },

  {
    number: "13",
    title: "Design Project Completion",
    content: (
      <p>
        Siluxri Creative Studio considers the design project complete upon
        receipt of the customer’s signed Approval form or sign off email.
        Other services such as printing, display panel production, film work,
        website uploading, publishing etc. contracted on the client’s behalf
        constitute a separate project and can be treated as a separate charge.
      </p>
    ),
  },

  {
    number: "14",
    title: "Website Design Only",
    content: (
      <p>
        Siluxri Creative Studio requires that a template is approved by the
        customer before coding of a site commences. Once the template(s) for
        the web site are approved by the customer, coding will commence; any
        changes to navigation items, colours, structure or content that
        require changes to the template will incur an additional charge.
      </p>
    ),
  },

  {
    number: "15",
    title: "Domain Registration",
    content: (
      <p>
        Siluxri Creative Studio cannot guarantee the availability of any
        domain name. Where Siluxri Creative Studio is to register a domain
        name on behalf of a client it will endeavour to do so but the client
        should not assume a successful registration.
      </p>
    ),
  },

  {
    number: "16",
    title: "Search Engine Submission",
    content: (
      <p>
        Due to the infinite number of considerations that search engines use
        when determining a site’s ranking, Siluxri Creative Studio cannot
        guarantee any particular placement. Acceptance by any search engine
        cannot be guaranteed and when a site is accepted, the time it takes to
        appear in search results varies from one search engine to another.
      </p>
    ),
  },

  {
    number: "17",
    title: "Design Credits",
    content: (
      <p>
        The customer agrees to allow Siluxri Creative Studio to place a small
        credit on printed material exhibition displays, advertisements and/or
        a link to Siluxri Creative Studio’s own website on the customer’s
        website. This will usually be in the form of a small logo or line of
        text placed towards the bottom of the page.
      </p>
    ),
  },

  {
    number: "18",
    title: "Rights of Refusal",
    content: (
      <p>
        Siluxri Creative Studio will not include in its designs, any text,
        images or other data which it deems to be immoral, offensive, obscene
        or illegal. All advertising material must conform to all standards
        laid down by all relevant advertising standards authorities.
      </p>
    ),
  },

  {
    number: "19",
    title: "Cancellation",
    content: (
      <p>
        Cancellation of orders may be made initially by telephone contact, or
        e-mail, however, following this, Siluxri Creative Studio will need
        formal notification in writing from the company. The client will then
        be invoiced for all work completed over and above the non-refundable
        deposit that will have been made at the time of first ordering.
      </p>
    ),
  },

  {
    number: "20",
    title: "Disclaimer",
    content: (
      <p>
        Siluxri Creative Studio makes no warranties of any kind, express or
        implied, for any and all products and/or services that it supplies.
        Siluxri Creative Studio will not be held responsible for any and all
        damages resulting from products and/or services it supplies.
      </p>
    ),
  },

  {
    number: "21",
    title: "General",
    content: (
      <p>
        These Terms and Conditions supersede any previous Terms and Conditions
        distributed in any form. Siluxri Creative Studio reserves the right to
        change any rates and any of the Terms and Conditions at any time and
        without prior notice.
      </p>
    ),
  },

  {
    number: "22",
    title: "Acceptance of Terms of Service and Quotation",
    content: (
      <p>
        The placement of an order for design and/or any other services offered
        by Siluxri Creative Studio, by email, verbally or in writing, is deemed
        to be acceptance of these terms and conditions.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <main className="bg-white text-blue">

      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-blue px-6 py-24 text-center text-white sm:px-8 md:px-12">

        {/* Decorative orange element */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            Legal
          </p>

          <h1 className="flex justify-center gap-3 text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Terms of
            <span className="block text-white/40">
              Service.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Our work is built on honesty and trust. These terms explain
            how we work and what we expect from our clients.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/40">
            Governed by the laws of Nigeria
          </p>
        </motion.div>
      </section>


      {/* INTRODUCTION */}
      <section className="px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-5xl">

          <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-16">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange">
              Our terms
            </p>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-blue/70 sm:text-xl">
              <p>
                We work well with our clients because our relationships are
                based on honesty and trust, but still, all work needs guidance
                in the form of terms and conditions.
              </p>

              <p>
                It’s important that you know what we charge for and why we
                charge it, why certain copyright files are not released by us
                and also what charges you might incur for late payment,
                additional work or copyright releases.
              </p>

              <p>
                If you have any questions, please do not hesitate to ask
                immediately.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* TERMS CONTENT */}
      <section className="px-6 pb-32 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-5xl">

          {terms.map((term, index) => (
            <motion.article
              key={term.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.02, 0.2),
              }}
              className="grid gap-6 border-t border-blue/15 py-12 md:grid-cols-[100px_1fr] md:gap-12"
            >

              {/* Number */}
              <div>
                <span className="text-sm font-semibold tracking-wider text-orange">
                  {term.number}
                </span>
              </div>

              {/* Content */}
              <div className="max-w-3xl">

                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {term.title}
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-blue/65 sm:text-lg">
                  {term.content}
                </div>

              </div>

            </motion.article>
          ))}

        </div>
      </section>


      {/* FINAL CONTACT STRIP */}
      <section className="bg-magenta px-6 py-16 text-white sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Questions?
            </p>

            <p className="mt-2 text-xl sm:text-2xl">
              We're happy to clarify anything.
            </p>
          </div>

          <a
            href="mailto:contact@siluxri.com"
            className="group inline-flex items-center gap-4 text-sm font-medium uppercase tracking-wider"
          >
            Contact us

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              <FiArrowRight />
            </span>
          </a>

        </div>
      </section>

    </main>
  );
}