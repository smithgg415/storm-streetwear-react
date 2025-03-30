
const Newsletter = () => {
  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Subscribe to our newsletter to receive exclusive offers, new product announcements, and style inspiration.
        </p>
        
        <form className="flex flex-col md:flex-row gap-4 mx-auto max-w-lg">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-black/30 border border-white/20 focus:outline-none focus:border-white/50"
            required
          />
          <button
            type="submit"
            className="button-primary whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
