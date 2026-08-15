import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_state = r'''  // Navigation active indicators
  const [activeNav, setActiveNav] = useState<string>("inicio");'''

new_state = r'''  // Navigation active indicators
  const [activeNav, setActiveNav] = useState<string>("inicio");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);'''

content = content.replace(old_state, new_state)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
