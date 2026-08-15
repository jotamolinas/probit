import re

with open('src/components/InteractivePreview.tsx', 'r') as f:
    content = f.read()

old_code = """                            <div className="overflow-hidden rounded-t-sm w-full h-full">
                              <img
                                src={project.image}
                                alt={`Proyecto ${project.title} - Desarrollo de Software y Hosting Corporativo en Paraguay | PROBIT`}
                                referrerPolicy="no-referrer"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/case-card:scale-105"
                              />
                            </div>"""

new_code = """                            <div className="overflow-hidden rounded-t-sm w-full h-full bg-slate-900 relative">
                              {project.url ? (
                                <div className="w-full h-full transition-transform duration-700 group-hover/case-card:scale-[1.05] origin-top">
                                  <iframe
                                    src={project.url}
                                    title={`Proyecto ${project.title}`}
                                    className="absolute top-0 left-0 pointer-events-none"
                                    style={{ 
                                      width: "300%", 
                                      height: "300%", 
                                      transform: "scale(0.333333)", 
                                      transformOrigin: "0 0",
                                      border: "none"
                                    }}
                                    scrolling="no"
                                    tabIndex={-1}
                                  />
                                </div>
                              ) : (
                                <img
                                  src={project.image}
                                  alt={`Proyecto ${project.title} - Desarrollo de Software y Hosting Corporativo en Paraguay | PROBIT`}
                                  referrerPolicy="no-referrer"
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/case-card:scale-105"
                                />
                              )}
                            </div>"""

if old_code in content:
    content = content.replace(old_code, new_code)
    with open('src/components/InteractivePreview.tsx', 'w') as f:
        f.write(content)
    print("Patched successfully")
else:
    print("Target not found")
