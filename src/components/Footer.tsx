function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-[11px] text-text-dim tracking-wider">
          &copy; {year} Saroj Kumar Dey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
