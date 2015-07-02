### REX Install Instructions

[Install Instructions Here](https://github.com/DeloitteDigitalDC/REX/blob/master/INSTALL.md)

# GSA/18F Agile Delivery Services – Deloitte Digital Response

At Deloitte Digital, we have a core belief that great design doesn’t just happen. Ideas alone are common. It takes discipline, research, and relentlessly talented and creative minds to make insights into something tangible that we can build, test, and iterate. In this section, we will describe our approach towards building the prototype for the GSA Agile Delivery Services BPA.

This approach helped the White House. It assisted TOMs going global. It helped Intel be more agile.

We take the team thing seriously. Our experienced, cross-disciplinary teams act as one team building one product.

That said, meet our diverse prototype team:
* Kevin, Product manager
* Aaron, Technical architect
* Bassel, Interaction designer
* Alex, Visual designer
* Lauren & Danny, Frontend web developer
* Mark, DevOps engineer
* Matt, Business analyst
* Seef, Delivery manager

We identified and empowered Kevin as our product manager. Kevin was given authority to make final decisions on concept, UX, design, and functionality and was ultimately responsible for bringing this product to life.

Taking a project from concept to completion requires a flexible approach enabling ongoing evaluation. We developed our prototype using the Studio Agile Model where small, highly-coordinated, cross-functional teams release working builds during sprint cycles organized into four phases: (1) Discovery, (2) Design, (3) Develop, and (4) Deploy.

## 1. Discovery

With us, it’s all about the user. Discovery is about learning as much as we can, as fast as we can about the available data, users, their problems, expectations, and pain points. We utilized human-centered design tools and techniques, which include ethnographic research, rapid prototyping, and personas.  

After we reviewed the open.fda.gov APIs, our interaction designer, visual designer, and business analyst engaged with three distinct focus groups of 3-4 potential users. Those interactions provided us with ethnographic data (e.g., demographics, tasks, needs, goals, tools, and pain points). Using this cross-disciplinary approach, we acquired an understanding of different user perspectives to design superior experiences.

Based on our discoveries, we created personas to target the distinct user profiles for our prototype. Our efforts resulted in [two personas](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ux/ReX-Personas-Final.pdf) and the decision to focus on a desktop product responsive to mobile platforms.

## 2. Design

Great design isn’t just beautiful, it’s emphatic. We used persona-based product concept ideation and user journey mapping and concluded with best practices-driven wireframe creation and usability testing.

Our interaction designer, technical architect, business analyst, visual designer, and product manager sketched out initial concepts for discussion and iteration.  The interaction designer led the team in journey mapping, resulting in a user [journey map](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ux/ReX-GSA%20ADS%20Journey%20Map_Deloitte.pdf) outlining the target users’ end-to-end experience and emotional responses.

Armed with these tools, our interaction designer created initial wireframes in Omnigraffle. The wireframes were moved into concept validation and usability testing after approval. Bringing in different users was essential, as they were able to provide fresh perspectives to drive a second iteration.

While the initial wireframes were being developed, our visual designer created a product [style guide](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/design/ReX-Styleguide-V3.pdf) for product manager approval and the development of visual compositions in Adobe Creative Suite. Following approval, our interaction designer promoted a round of usability testing, resulting in the final visuals.

## 3. Develop

Agile development means delivering early and often. Our engineering approach was to get a minimum viable product (MVP) as quickly as possible so we could test the product with users and iterate based upon their feedback.

Our technical architect, DevOps engineer, and frontend web developers kicked off Sprint 0 as soon as we got underway.  Our team spun up the source repository, created the app scaffolding and set up the build pipeline [(as seen here)](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ReX-DevOps.pdf).

During our sprints the frontend web developers implemented and constructed unit tests for the identified user stories and delivery manager coordinated the creation of functional tests and automation [(seen here)](https://github.com/DeloitteDigitalDC/REX/tree/master/evidence/quality-assurance), and all tests were run as an integral part of our build pipeline.  Our entire application stack leverages free and/or open source technologies like Angular and Node, and we used containerized deployment techniques using Docker to package our application and associated dependencies.

## 4. Deploy

When we deployed, we worked to avoid mistakes as much as possible. Fully utilizing container-based deployment, we reduced the risk of errors. When all unit and end-to-end testing was completed and the product manager gave his final approval, we deployed our product to http://askrex.io and uploaded to GitHub for review per the Request for quotation instructions. In our production environment, we were able to continuously monitor the application to ensure that it was performing as expected.
