const Footer = () => (
  <footer className="bg-background py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
      <p className="font-heading text-lg text-foreground">Terra Bloom</p>
      <div className="flex gap-8">
        {["About", "Specialties", "FAQ", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-xs font-medium tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            {item}
          </a>
        ))}
      </div>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Terra Bloom Therapy
      </p>
    </div>
  </footer>
);

export default Footer;
