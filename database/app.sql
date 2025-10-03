PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  slug TEXT UNIQUE,
  date TEXT,
  excerpt TEXT,
  content TEXT,
  tags TEXT,
  category TEXT,
  image TEXT
);

INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('AI & ML Intro', 'ai-ml-intro', 'Sun Feb 02 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'High-level ML concepts for developers.', '

A tiny primer about models, data and evaluation.
', '["ai","ml"]', 'AI & Machine Learning', 'https://picsum.photos/seed/ai-ml-intro/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('ML Tooling', 'ml-tooling', 'Sun Mar 02 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Tools and libraries to start with ML tasks.', '

Short notes about scikit-learn, tensorflow and experimentation.
', '["ml","tools"]', 'AI & Machine Learning', 'https://picsum.photos/seed/ml-tooling/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('APIs and RESTful Services', 'apis-and-restful-services', 'Wed Jul 09 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'A beginner''s guide to building and consuming RESTful APIs.', '
Understand the basics of API design, REST principles, and how to interact with APIs from your frontend and backend code.
', '[]', NULL, 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Architecture Guides', 'architecture-guides', 'Wed Mar 12 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Concise guides for common architectural decisions.', '

Tiny guide notes for testing category pages.
', '["architecture","guides"]', 'Architecture & Patterns', 'https://picsum.photos/seed/architecture-guides/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Software Architecture Basics', 'architecture-basics', 'Sun Feb 16 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Intro to common architecture patterns.', '

Short overview of monolith vs microservices and when to use them.
', '["architecture","patterns"]', 'Architecture & Patterns', 'https://picsum.photos/seed/architecture-basics/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Simple Automation Examples', 'automation-examples', 'Thu Mar 06 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Short examples for automations and bots.', '

A couple of tiny examples to play with.
', '["automation","examples"]', 'Automation & Robotics', 'https://picsum.photos/seed/automation-examples/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Automation 101', 'automation-101', 'Sat Feb 08 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Intro to automation workflows and robotics basics.', '

Small experimental post about automating repetitive tasks.
', '["automation","robotics"]', 'Automation & Robotics', 'https://picsum.photos/seed/automation-101/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Backend Basics', 'backend-basics', 'Sat Jan 11 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Overview of backend responsibilities and patterns.', '

A brief playground post about servers, APIs, and simple backend concerns.
', '["backend","api"]', 'Backend', 'https://picsum.photos/seed/backend-basics/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Scaling Backend Services', 'scaling-backend', 'Fri Feb 07 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Notes on horizontal scaling and reliability.', '

Quick notes to test listing and filtering by category.
', '["backend","scaling"]', 'Backend', 'https://picsum.photos/seed/scaling-backend/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Building dApps (toy)', 'building-dapps', 'Tue Mar 04 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Very short notes on dApp structure.', '

A tiny example outline for decentralized app components.
', '["blockchain","dapp"]', 'Blockchain & Web3', 'https://picsum.photos/seed/building-dapps/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Blockchain Basics', 'blockchain-basics', 'Wed Feb 05 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Intro to distributed ledgers and smart contracts.', '

Short test content about wallets, chains and contracts.
', '["blockchain","web3"]', 'Blockchain & Web3', 'https://picsum.photos/seed/blockchain-basics/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Building with Modern UI Frameworks', 'building-modern-ui-frameworks', 'Sat Sep 27 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Explore the world of modern UI frameworks and learn how to build interactive web applications.', '
# Building with Modern UI Frameworks

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.

## Why Use a Framework?

Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.

### Component-Based Architecture

Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.

### State Management

Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.

## Popular Frameworks

Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.

### React and Vue

Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.

### Svelte and Beyond

Vivamus ullamcorper urna eu tellus. Quisque varius. Cras iaculis suscipit ante. Nam consequat dolor at dolor. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.

## Getting Started with Frameworks

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna.

Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.
', '[]', NULL, 'https://picsum.photos/seed/frameworks/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Managing Cloud Costs', 'cloud-costs', 'Thu Feb 20 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Simple strategies to control cloud spend.', '

Short tips to monitor and reduce cloud expenses.
', '["cloud","costs"]', 'Cloud Computing', 'https://picsum.photos/seed/cloud-costs/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Cloud Computing 101', 'cloud-101', 'Fri Jan 24 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Cloud concepts and service models.', '

A tiny primer on IaaS, PaaS and SaaS.
', '["cloud","iaas","saas"]', 'Cloud Computing', 'https://picsum.photos/seed/cloud-101/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Cybersecurity Basics', 'cybersecurity-basics', 'Tue Jan 21 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Foundations of web security.', '

Short checklist for securing web apps (auth, TLS, headers).
', '["security","cybersecurity"]', 'Cybersecurity', 'https://picsum.photos/seed/cybersecurity-basics/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Practical Security Practices', 'security-practices', 'Tue Feb 18 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Practical steps to harden apps.', '

Short notes to test category pages for cybersecurity.
', '["security","best-practices"]', 'Cybersecurity', 'https://picsum.photos/seed/security-practices/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Intro to Databases', 'intro-databases', 'Sun Jan 19 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Relational vs NoSQL at a glance.', '

Short comparison of relational and document databases for testing.
', '["databases","sql","nosql"]', 'Databases', 'https://picsum.photos/seed/intro-databases/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Writing Efficient Queries', 'efficient-queries', 'Sat Feb 15 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Tips to write performant database queries.', '

A few short tips on indexes and query patterns.
', '["databases","queries"]', 'Databases', 'https://picsum.photos/seed/efficient-queries/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Deploying with Docker and CI/CD', 'deploying-with-docker-cicd', 'Thu Aug 14 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Automate your deployments using Docker and modern CI/CD pipelines.', '
Learn how to containerize your applications and set up continuous integration and deployment workflows.
', '[]', NULL, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Design Fundamentals', 'design-fundamentals', 'Fri Jan 17 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Basics of UI/UX design for developers.', '

A short post about visual hierarchy, spacing and color usage.
', '["design","ui","ux"]', 'Design', 'https://picsum.photos/seed/design-fundamentals/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Design Tools I Like', 'design-tools', 'Thu Feb 13 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Quick list of useful design tools.', '

Notes about Figma, components and simple prototyping tips.
', '["design","tools"]', 'Design', 'https://picsum.photos/seed/design-tools/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Automation in DevOps', 'automation-devops', 'Mon Feb 10 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Practical automation tips.', '

Small notes about automating builds and deployments.
', '["devops","automation"]', 'DevOps', 'https://picsum.photos/seed/automation-devops/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('DevOps Overview', 'devops-overview', 'Tue Jan 14 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Intro to DevOps practices and toolchains.', '

Tiny demo post describing CI/CD, infra as code and automation basics.
', '["devops","ci","cd"]', 'DevOps', 'https://picsum.photos/seed/devops-overview/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Emerging Tech Examples', 'emerging-examples', 'Fri Mar 14 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Tiny experiments and POCs.', '

Small experiment ideas for new tech.
', '["emerging","examples"]', 'Emerging Tech', 'https://picsum.photos/seed/emerging-examples/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Emerging Tech Highlights', 'emerging-tech-highlights', 'Wed Feb 19 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Short notes on new technologies to watch.', '

A short list of topics to experiment with.
', '["emerging","trends"]', 'Emerging Tech', 'https://picsum.photos/seed/emerging-tech-highlights/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Frontend Patterns and Tips', 'frontend-patterns-tips', 'Tue Feb 04 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Practical patterns for building resilient frontends.', '

Short notes about component patterns, accessibility and performance optimizations.
', '["frontend","patterns"]', 'Frontend', 'https://picsum.photos/seed/frontend-patterns-tips/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Getting Started with Frontend', 'getting-started-frontend', 'Thu Jan 09 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'A quick intro to modern frontend development.', '

This is a small test post about frontend basics. Use this to experiment with PostCard and category listing.
', '["frontend","html","css","js"]', 'Frontend', 'https://picsum.photos/seed/getting-started-frontend/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Hardware & IoT Intro', 'hardware-iot-intro', 'Mon Jan 27 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Basics of embedded systems and IoT.', '

A small test post on sensors, microcontrollers and prototyping.
', '["hardware","iot"]', 'Hardware & IoT', 'https://picsum.photos/seed/hardware-iot-intro/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Simple IoT Projects', 'simple-iot-projects', 'Sun Feb 23 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Ideas to get started with hardware projects.', '

Short ideas for quick IoT experiments.
', '["hardware","projects"]', 'Hardware & IoT', 'https://picsum.photos/seed/simple-iot-projects/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Introduction to Web Development', 'introduction-to-web-development', 'Sun Sep 14 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Learn the fundamentals of web development and start your journey into creating amazing websites.', '
# Introduction to Web Development

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## What is Web Development?

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Frontend Development

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

### Backend Development

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

## Getting Started

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
', '[]', NULL, 'https://picsum.photos/seed/webdev/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Programming Languages Overview', 'languages-overview', 'Thu Feb 13 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Comparing languages and their use-cases.', '

Very short notes on language choice and ecosystems.
', '["languages","comparison"]', 'Programming Languages', 'https://picsum.photos/seed/languages-overview/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Language Paradigms', 'language-paradigms', '2025-03-11', 'Brief on paradigms: imperative, functional, declarative.', 'A tiny explanation to use for testing filters.', '["languages","paradigms"]', 'Programming Languages', 'https://picsum.photos/seed/language-paradigms/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Mastering JavaScript Basics', 'mastering-javascript-basics', 'Sun Sep 21 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Dive deep into JavaScript fundamentals and build a solid foundation for your programming journey.', '
# Mastering JavaScript Basics

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

## Variables and Data Types

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Understanding Variables

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

### Working with Arrays

Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

## Functions and Scope

Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.

### Arrow Functions

Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.

## Conclusion

Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
', '[]', NULL, 'https://picsum.photos/seed/javascript/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Mobile Dev Basics', 'mobile-basics', 'Wed Jan 29 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Native vs cross-platform overview.', '

Tiny comparison to play with mobile category links.
', '["mobile","react-native","flutter"]', 'Mobile Development', 'https://picsum.photos/seed/mobile-basics/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Mobile UI Tips', 'mobile-ui-tips', 'Tue Feb 25 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Small UI tips for mobile apps.', '

Short suggestions for responsive mobile layouts and touch targets.
', '["mobile","ui"]', 'Mobile Development', 'https://picsum.photos/seed/mobile-ui-tips/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Networking Essentials', 'networking-essentials', 'Fri Jan 31 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Overview of networking concepts for developers.', '

Small notes about routing, DNS and HTTP fundamentals.
', '["networking","tcp","http"]', 'Networking', 'https://picsum.photos/seed/networking-essentials/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Networking Tools', 'networking-tools', 'Fri Feb 28 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Useful CLI tools and diagnostics.', '

Short list: ping, traceroute, tcpdump and when to use them.
', '["networking","tools"]', 'Networking', 'https://picsum.photos/seed/networking-tools/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Open Source: Getting Involved', 'open-source-getting-involved', '2025-02-12', 'How to start contributing to open source.', 'Short tips for first contributions and finding issues.', '["open-source","contribute"]', 'Open Source', 'https://picsum.photos/seed/open-source/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Open Source Tools', 'open-source-tools', 'Sat Mar 08 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Small list of tooling for maintainers and contributors.', '

Notes about issue templates, CI and code of conduct.
', '["open-source","tools"]', 'Open Source', 'https://picsum.photos/seed/open-source-tools/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Productivity Tools Overview', 'productivity-tools-overview', 'Fri Feb 21 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Tools and workflows to stay productive.', '

Short notes about task management and focus techniques.
', '["productivity","tools"]', 'Productivity Tools', 'https://picsum.photos/seed/productivity-tools-overview/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Quick Productivity Tips', 'productivity-tips', 'Sun Mar 16 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Small tips to improve daily workflow.', '

Short actionable tips you can use right away.
', '["productivity","tips"]', 'Productivity Tools', 'https://picsum.photos/seed/productivity-tips/800/400');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('Understanding TypeScript Generics', 'typescript-generics', 'Wed Aug 27 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'A practical guide to mastering generics in TypeScript for safer, reusable code.', '
Explore how generics work in TypeScript and how to use them to write flexible, type-safe functions and components.
', '[]', NULL, 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80');
INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES ('UI/UX Principles for Developers', 'ui-ux-principles', 'Tue Jul 29 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Essential UI/UX concepts every developer should know to build user-friendly apps.', '
Discover the fundamentals of user interface and user experience design to improve your web and mobile projects.
', '[]', NULL, 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80');

COMMIT;
