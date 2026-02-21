const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-heading text-sm font-bold text-foreground">
          SuccessBy<span className="text-accent-builder">CS</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SuccessByCS. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
