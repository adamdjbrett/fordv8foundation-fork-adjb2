CMS.registerPreviewStyle("/admin/bs.css");
CMS.registerPreviewStyle("/admin/main.css");
CMS.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");


const PostPreview = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const description = entry.getIn(['data', 'description']);
    const date = entry.getIn(['data', 'date']);
    const authors = entry.getIn(['data', 'authors']);
    const image = entry.getIn(['data', 'image']);
    const tags = entry.getIn(['data', 'tags']);
    const body = this.props.widgetFor('body');

    return h('main', {id: "main-content"},
      h('header', {className: "hero mb-5", style: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`}, "aria-label": "header"},
        h('div', {className: "px-4 py-5 my-5 text-center"},
          h('h1', {className: "display-5 mt-5 fw-bold header_title text-body-emphasis"},
            h('a', {href: "#", className: "text-white non"}, title)
          ),
          h('div', {className: "col-lg-8 mx-auto mt-5 mb-5"},
            h('h2', {className: "lead mb-4"}, description),
            h('p', {className: "mt-5"}, 
              tags && tags.map(tag => h('a', {href: "#", className: "text-white me-1"}, tag))
            )
          )
        )
      ),
      h('div', {className: "col-md-10 mx-auto p-3 justify-content-center text-center", "aria-label": "Author Profile"},
        h('p', {}, 
          "Publish By ",
          authors && authors.map(author => 
            h('span', {className: "ms-2 me-2"},
              h('a', {href: "#"}, author)
            )
          ),
          h('span', {}, 
            " on ",
            h('time', {className: "postlist-date", datetime: date}, new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'}))
          )
        )
      ),
      h('main', {className: "container", "aria-label": "Main Article"},
        h('div', {className: "row mt-5 mb-5"},
          h('div', {className: "col-md-10 mx-auto p-3 p-md-5"},
            h('heading-anchors', {}, body)
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("post", PostPreview);


const TimelinePreview = createClass({
    render() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const description = entry.getIn(['data', 'description']);
      const date = entry.getIn(['data', 'date']);
      const image = entry.getIn(['data', 'image']);
      const tags = entry.getIn(['data', 'tags']);
      const body = this.props.widgetFor('body');
      const showTableOfContent = entry.getIn(['data', 'show_table_of_content']);
  
      // Function to generate table of contents
      const generateTOC = (content) => {
        const headings = content.match(/<h([2-3])[^>]*>(.*?)<\/h\1>/g) || [];
        return headings.map(heading => {
          const level = heading.match(/<h([2-3])/)[1];
          const text = heading.replace(/<[^>]+>/g, '');
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return `<li><a href="#${id}">${text}</a></li>`;
        }).join('');
      };
  
      return h('main', {id: "main-content"},
        h('header', {className: "hero mb-5", style: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`}},
          h('div', {className: "px-4 py-5 my-5 text-center"},
            h('h1', {className: "display-5 mt-5 fw-bold header_title text-body-emphasis"},
              h('a', {href: "#", className: "text-white non"}, title)
            ),
            h('div', {className: "col-lg-8 mx-auto mt-5 mb-5"},
              h('h2', {className: "lead mb-4"}, description)
            )
          )
        ),
        h('main', {className: "container", "aria-label": "Time Line Post"},
          h('div', {className: "row mt-5 mb-5"},
            h('div', {className: "col-md-10 mx-auto p-3 p-md-5"},
              showTableOfContent && h('div', {className: "p-3 p-md-5 mb-5 bg-body-tertiary"},
                h('h3', {}, "On This Page"),
                h('div', {className: "toci"},
                  h('div', {className: "toc", dangerouslySetInnerHTML: {__html: `<ul>${generateTOC(body.props.value)}</ul>`}})
                )
              ),
              h('heading-anchors', {}, body),
              h('p', {}, 
                "Update on ",
                h('time', {className: "postlist-date", datetime: date}, 
                  new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})
                )
              )
            )
          )
        )
      );
    }
  });
  
  CMS.registerPreviewTemplate("timeline", TimelinePreview);

  const BlogListPreview = createClass({
    render() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const description = entry.getIn(['data', 'description']);
      const image = entry.getIn(['data', 'image']);
      const body = this.props.widgetFor('body');
  
      return h('main', {id: "main-content"},
        h('header', {className: "hero mb-5", style: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`}},
          h('div', {className: "px-4 py-5 my-5 text-center"},
            h('h1', {className: "display-5 mt-5 fw-bold header_title text-body-emphasis"},
              h('a', {href: "#", className: "text-white non"}, title)
            ),
            h('div', {className: "col-lg-8 mx-auto mt-5 mb-5"},
              h('h2', {className: "lead mb-4"}, description)
            )
          )
        ),
        h('main', {className: "container", "aria-label": "Blog List"},
          h('div', {className: "row mt-5 mb-5"},
            h('div', {className: "col-md-10 mx-auto p-3 p-md-5"},
              body,
              h('div', {className: "blog-list-preview"},
                h('p', {}, "Blog posts will be listed here. This is a preview, so actual blog posts are not displayed.")
              )
            )
          )
        ),
        h('nav', {className: "blog-pagination", "aria-label": "Pagination"},
          h('ul', {className: "pagination justify-content-center"},
            h('li', {className: "page-item disabled"},
              h('a', {className: "page-link", tabIndex: "-1", "aria-disabled": "true"}, "Previous")
            ),
            h('li', {className: "page-item"},
              h('a', {className: "page-link", href: "#"}, "1")
            ),
            h('li', {className: "page-item active", "aria-current": "page"},
              h('a', {className: "page-link", href: "#"}, "2")
            ),
            h('li', {className: "page-item"},
              h('a', {className: "page-link", href: "#"}, "3")
            ),
            h('li', {className: "page-item"},
              h('a', {className: "page-link", href: "#"}, "Next")
            )
          )
        )
      );
    }
  });
  
  CMS.registerPreviewTemplate("blog", BlogListPreview);


const PagePreview = createClass({
    render() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const description = entry.getIn(['data', 'description']);
      const image = entry.getIn(['data', 'image']);
      const showTableOfContent = entry.getIn(['data', 'show_table_of_content']);
      const body = this.props.widgetFor('body');
  
      // Function to generate table of contents
      const generateTOC = (content) => {
        const headings = content.match(/<h([2-3])[^>]*>(.*?)<\/h\1>/g) || [];
        return headings.map(heading => {
          const level = heading.match(/<h([2-3])/)[1];
          const text = heading.replace(/<[^>]+>/g, '');
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return `<li><a href="#${id}">${text}</a></li>`;
        }).join('');
      };
  
      return h('main', {id: "main-content"},
        h('header', {className: "hero mb-5", style: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`}},
          h('div', {className: "px-4 py-5 my-5 text-center"},
            h('h1', {className: "display-5 mt-5 fw-bold header_title text-body-emphasis"},
              h('a', {href: "#", className: "text-white non"}, title)
            ),
            h('div', {className: "col-lg-8 mx-auto mt-5 mb-5"},
              h('h2', {className: "lead mb-4"}, description)
            )
          )
        ),
        h('main', {className: "container", "aria-label": "Static Page Content"},
          h('div', {className: "row mt-5 mb-5"},
            h('div', {className: "col-md-10 mx-auto p-3 p-md-5"},
              showTableOfContent && h('div', {className: "p-3 p-md-5 mb-5 bg-body-tertiary"},
                h('h3', {}, "On This Page"),
                h('div', {className: "toci"},
                  h('div', {className: "toc", dangerouslySetInnerHTML: {__html: `<ul>${generateTOC(body.props.value)}</ul>`}})
                )
              ),
              h('heading-anchors', {}, body)
            )
          )
        )
      );
    }
  });
  
  CMS.registerPreviewTemplate("pages", PagePreview);



  const SettingsPreview = createClass({
    render() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const description = entry.getIn(['data', 'description']);
      const image = entry.getIn(['data', 'image']);
      const navItems = entry.getIn(['data', 'navbar', 'nav_list']);
      const dropdownItems = entry.getIn(['data', 'navbar', 'nav_dropdown', 'item']);
      const footerTitle = entry.getIn(['data', 'footer', 'title']);
      const footerItems = entry.getIn(['data', 'footer', 'item']);
      const copyrightText1 = entry.getIn(['data', 'copyrights', 'text1']);
      const copyrightText2 = entry.getIn(['data', 'copyrights', 'text2']);
      const copyrightUrl = entry.getIn(['data', 'copyrights', 'text2_url']);
  
      return h('div', {},
        // Navigation
        h('nav', { className: "navbar navbar-expand-lg bg-body-tertiary fixed-top" },
          h('div', { className: "container-fluid" },
            h('a', { className: "navbar-brand", href: "/" }, title),
            h('button', {
              className: "navbar-toggler btn btn-sm",
              type: "button",
              'data-bs-toggle': "collapse",
              'data-bs-target': "#navbarSupportedContent",
              'aria-controls': "navbarSupportedContent",
              'aria-expanded': "false",
              'aria-label': "Toggle navigation"
            },
              h('i', { className: "fas fa-bars" })
            ),
            h('div', { className: "collapse navbar-collapse justify-content-end", id: "navbarSupportedContent" },
              h('ul', { className: "navbar-nav", 'aria-label': "menu nav" },
                navItems && navItems.map((item, index) => 
                  h('li', { className: "nav-item", key: index },
                    h('a', { className: "nav-link", href: item.get('url') }, item.get('nav'))
                  )
                ),
                h('li', { className: "nav-item dropdown", 'aria-label': "Menu Nav Drop Down" },
                  h('a', {
                    className: "nav-link dropdown-toggle",
                    href: "#",
                    role: "button",
                    'data-bs-toggle': "dropdown",
                    'aria-expanded': "false"
                  }, "Menu"),
                  h('ul', { className: "dropdown-menu dropdown-menu-end" },
                    dropdownItems && dropdownItems.map((item, index) => 
                      h('li', { key: index },
                        h('a', { className: "dropdown-item", href: item.get('url') }, item.get('nav'))
                      )
                    )
                  )
                ),
                // Theme toggle button (simplified for preview)
                h('li', { className: "nav-item" },
                  h('button', {
                    className: "btn py-2 d-flex align-items-center",
                    id: "bd-theme",
                    type: "button",
                    'aria-expanded': "false",
                    'aria-label': "Toggle theme (auto)"
                  }, "Theme")
                )
              )
            )
          )
        ),
  
        // Main content
        h('main', { id: "main-content" },
          // Header
          h('header', {
            className: "hero mb-5",
            style: {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }
          },
            h('div', { className: "px-4 py-5 my-5 text-center" },
              h('h1', { className: "display-5 mt-5 fw-bold header_title text-body-emphasis" },
                h('a', { href: "/", className: "text-white non" }, title)
              ),
              h('div', { className: "col-lg-8 mx-auto mt-5 mb-5" },
                h('h2', { className: "lead mb-4" }, description)
              )
            )
          ),
  
          // Placeholder for main content sections
          h('section', { className: "container", 'aria-label': "Information" },
            h('p', {}, "Main content sections will be displayed here.")
          )
        ),
  
        // Footer
        h('footer', { className: "container-fluid border-top border-bottom" },
          h('div', { className: "row mt-3" },
            h('div', { className: "col-md-6 p-3 p-md-5", 'aria-label': "footer title" },
              h('h3', { className: "display-6" },
                h('a', { href: "/" }, footerTitle)
              )
            ),
            h('div', { className: "col-md-6 p-3 p-md-5", 'aria-label': "footer menu" },
              h('ul', { className: "row" },               footerItems && footerItems.map((item, index) => 
                h('li', { className: "col-md-4 col-4", key: index },
                  h('a', { className: "non", href: item.get('url') }, item.get('nav'))
                )
              )
            )
          )
        )
      ),

      // Copyright
      h('p', { className: "p-1 text-center small bg-body-tertiary", 'aria-label': "copyrights" },
        copyrightText1,
        ' ',
        h('a', { href: copyrightUrl }, copyrightText2)
      )
    );
  }
});

CMS.registerPreviewTemplate("metadata", SettingsPreview);
       
const FAQPreview = createClass({
    render() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const description = entry.getIn(['data', 'description']);
      const image = entry.getIn(['data', 'image']);
      const faqActive = entry.getIn(['data', 'faq_active']);
      const faqItems = entry.getIn(['data', 'faq']);
  
      return h('main', {id: "main-content"},
        // Header
        h('header', {className: "hero mb-5", style: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`}},
          h('div', {className: "px-4 py-5 my-5 text-center"},
            h('h1', {className: "display-5 mt-5 fw-bold header_title text-body-emphasis", id: "print-faq"},
              h('a', {href: "/faq/", className: "text-white non"}, title)
            ),
            h('div', {className: "col-lg-8 mx-auto mt-5 mb-5"},
              h('h2', {className: "lead mb-4", id: "print-frequently-asked-questions-faq"}, description)
            )
          )
        ),
  
        // Main content
        h('main', {className: "container", "aria-label": "Main Article Content"},
          h('div', {className: "row mt-5 mb-5"},
            h('div', {className: "col-md-10 mx-auto p-3 p-md-5"},
              h('div', {className: "faq-list"},
                // Active FAQ
                h('div', {className: "faq-item"},
                  h('p', {className: "faq-question"}, faqActive.get('a')),
                  h('div', {className: "faq-answer"}, faqActive.get('q'))
                ),
                // FAQ Items
                faqItems && faqItems.map((item, index) => 
                  h('div', {className: "faq-item", key: index},
                    h('p', {className: "faq-question"}, item.get('a')),
                    h('div', {className: "faq-answer"}, item.get('q'))
                  )
                )
              )
            )
          )
        )
      );
    }
  });
  
  CMS.registerPreviewTemplate("faq", FAQPreview);
  

  const HomePreview = createClass({
    render() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const description = entry.getIn(['data', 'description']);
      const image = entry.getIn(['data', 'image']);
      const information = entry.getIn(['data', 'information']);
      const info = entry.getIn(['data', 'info']);
  
      return h('main', {id: "main-content"},
        // Header
        h('header', {className: "hero mb-5", style: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`}},
          h('div', {className: "px-4 py-5 my-5 text-center"},
            h('h1', {className: "display-5 mt-5 fw-bold header_title text-body-emphasis", id: "print-adam-dj-brett"},
              h('a', {href: "/", className: "text-white non"}, title)
            ),
            h('div', {className: "col-lg-8 mx-auto mt-5 mb-5"},
              h('h2', {className: "lead mb-4", id: "print-adam-dj-brett-a-scholar-of-religion-and-media"}, description),
              h('p', {className: "mt-5"}, information)
            )
          )
        ),
  
        // Information Section
        h('section', {className: "container", "aria-label": "Information"},
          h('div', {className: "row mt-5 mb-5"},
            h('div', {className: "col-md-6 shadow", style: {backgroundImage: `url('${info.get('image')}')`}}),
            h('div', {className: "col-md-6 p-3 p-md-5"},
              h('h3', {id: `print-${info.get('title').toLowerCase().replace(/\s+/g, '-')}`},
                h('a', {href: "/", className: "non"}, info.get('title'))
              ),
              h('p', {}, info.get('text'))
            )
          )
        ),
  
        // Additional Content Section
        h('section', {className: "container"},
          h('div', {className: "row mt-5 mb-3"},
            h('div', {className: "col-md-10 p-3 p-md-5", "aria-label": "Content Article"},
              h('h3', {id: "bretts-academic-interests-span-a-diverse-range-of-topics", tabIndex: "-1"},
                h('a', {href: "/"}, "Brett's academic interests span a diverse range of topics"),
                h('a', {className: "header-anchor", href: "#bretts-academic-interests-span-a-diverse-range-of-topics"}, ".")
              ),
              h('p', {}, "including American religious history, Indigenous religions, and the interplay between religion and technology. His teaching experience covers courses such as 'Religion and Science Fiction' and 'Religion and Sports', reflecting his ability to connect religious studies with contemporary cultural phenomena.")
            )
          )
        )
      );
    }
  });
  
  CMS.registerPreviewTemplate("home", HomePreview);
