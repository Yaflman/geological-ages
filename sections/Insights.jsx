'use client';

const Insights = () => (
  <section className="bg-gradient-to-b from-[rgba(220,220,220,1)] to-[rgba(233,213,190,1)] p-6 text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1E1E2D]">
        We need your support
      </h2>
      <p className="mt-4 text-lg text-[#4A4A4A]">
        Continued development and maintenance of the Digital Atlas of Ancient Life and the Paleontological Research Institution's (PRI's) broader Earth@Home project depends on support from visitors like you.
      </p>
      <p className="mt-2 text-lg text-[#4A4A4A]">
        Donations of any amount are welcome.
      </p>

      <div className="mt-6">
        <img
          src="/donation.png" // Replace this with the actual image path
          alt="Support the Digital Atlas"
          className="mx-auto w-[200px] h-[200px] object-cover rounded-full"
        />
      </div>

      <form action="/submit-donation" method="POST"> {/* Replace with your form action URL */}
        <button
          type="submit"
          className="mt-6 py-3 px-8 bg-[rgba(139,69,19,0.8)] text-white rounded-[32px] text-lg"
        >
          Donate Now
        </button>
      </form>

    </div>
  </section>
);

export default Insights;
