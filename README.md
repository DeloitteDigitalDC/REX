# REX by Deloitte Digital

[Install REX locally.](https://github.com/DeloitteDigitalDC/REX/blob/master/INSTALL.md)

[Access the prototype.](http://askrex.io/) (View [tips](https://github.com/DeloitteDigitalDC/REX/blob/master/USER-TIPS.md) to quickly see features of the application)

[View the video.](https://vimeo.com/132462802) (A lower resolution version of the video is located in the repository [here](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/media/18F-Proposal-720p.mp4))


## GSA/18F Agile Delivery Services – Deloitte Digital Approach

At Deloitte Digital, we have a core belief that great design doesn’t just happen. Ideas alone are common. It takes discipline, research, and relentlessly talented and creative minds to make insights into something tangible that we can build, test, and iterate on. In this section, we will describe our approach towards building the prototype for the GSA Agile Delivery Services BPA.

We take the team thing seriously. Our experienced, cross-disciplinary teams act as one team building one product.

That said, meet our diverse [prototype team](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ReX-OrgChart.pdf):
* Kevin, Product manager
* Aaron, Technical architect
* Bassel, Interaction designer
* Alex, Visual designer
* Lauren & Danny, Frontend web developers
* Mark, DevOps engineer
* Matt, Business analyst
* Seef, Delivery manager

We identified and empowered Kevin as our product manager. Kevin was given authority to make final decisions on concept, UX, design, and functionality and was ultimately responsible for bringing this product to life.

Taking a project from concept to completion requires a flexible approach enabling ongoing evaluation. We developed our prototype using the Studio Agile Model where small, highly-coordinated, cross-functional teams release working builds during sprint cycles organized into four phases: (1) Discovery, (2) Design, (3) Develop, and (4) Deploy.

## 1. Discovery

With us, it’s all about the user. Discovery is about learning as much as we can, as fast as we can about the available data, users, their problems, expectations, and pain points. We utilized human-centered design tools and techniques, which include ethnographic research, rapid prototyping, and personas.

After we reviewed the open.fda.gov APIs, our interaction designer, visual designer, and business analyst engaged with three distinct focus groups of 3-4 potential users. Those interactions provided us with ethnographic data (e.g., demographics, tasks, needs, goals, tools, and pain points). Using this cross-disciplinary approach, we acquired an understanding of different user perspectives to design superior experiences.

Based on our discoveries, we created personas to target the distinct user profiles for our prototype. Our efforts resulted in [two personas](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ux/ReX-Personas-Final.pdf) and the decision to focus on a desktop product responsive to mobile platforms.

During discovery, we also conducted our sprint planning, set up our initial backlog of user stories, and prioritization. We initially planned a one-week sprint. As our sprint was running, our team created new user stories based on user feedback and usability testing.
When the first RFQ submission extension was announced, we scoped a second sprint, and groomed our backlog to prioritize any potential future sprints. This current, prioritized backlog was exported from Jira, and can be viewed [here](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ReX-Backlog.png) and the completed user stories from both sprints can be viewed [here](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/Rex-StoryExport.xlsx).


## 2. Design

Great design isn’t just beautiful, it’s emphatic. We used persona-based product concept ideation and user journey mapping and concluded with best practices-driven wireframe creation and usability testing.

Our interaction designer, technical architect, business analyst, visual designer, and product manager sketched out initial concepts for discussion and iteration.  The interaction designer led the team in journey mapping, resulting in a user [journey map](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ux/ReX-GSA%20ADS%20Journey%20Map_Deloitte.pdf) outlining the target users’ end-to-end experience and emotional responses.

Armed with these tools, our interaction designer created initial wireframes in Omnigraffle. The wireframes were moved into concept validation and usability testing after approval. Bringing in different users was essential, as they were able to provide fresh perspectives to drive a second iteration.

While the initial wireframes were being developed, our visual designer created a product [style guide](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/design/ReX-Styleguide-V3.pdf) for product manager approval and the development of visual compositions in Adobe Creative Suite. Following approval, our interaction designer conducted a round of usability testing, resulting in feedback that was used to update our designs. We performed multiple rounds of usability testing on our wireframes, visual compositions, and our web prototype. Notes from our usability testing can be seen [here](https://github.com/DeloitteDigitalDC/REX/tree/master/evidence/quality-assurance).  Two examples of iterations made to our product are explained below:

1. In the [first version of the wireframes](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ux/ReX-Wireframes-v1.pdf), we provided users with a slide out sidebar navigation which users found redundant and confusing.  Based on this feedback, we [revised the design](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ux/ReX-Wireframes-v5.pdf) to remove sidebar navigation was and we implemented intuitive icon driven navigation (e.g. logo, profile).  We verified that this change improved the application flow by asking users questions like, "How would you navigate back to your Drug Cabinet?" during usability testing with a paper prototype from design comps.  We completed the verification process during another round of usability testing with a live version of the app where users successfully completed the tasks related to navigating the application.

2. In early iterations, we provided the capability for users to compare two drugs in their virtual cabinet ([shown here](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/design/ReX-Comps-v2.pdf)).  During usability testing, users questioned the purpose of the comparison feature given the data we were able to capture from the API. Based on the results of our testing, we determined that this feature would not add value to the product and we decided to remove it ([as shown here](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/design/ReX-Comps-v3.pdf)). This was removed entirely from the design before a single line of code was written for this feature.

## 3. Develop

Agile development means delivering early and often. Our engineering approach was to get a minimum viable product (MVP) as quickly as possible so we could test the product with users and iterate based upon their feedback.

Our technical architect, DevOps engineer, and frontend web developers kicked off Sprint 0 as soon as we got underway.  Our team spun up the source repository, created the app scaffolding and set up the build pipeline ([as seen here](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ReX-DevOps.pdf)).  Our build pipeline was designed and built from the ground up to maximize the speed with which we can build and ship a feature while also adhering to QA and configuration management processes that are so critical to building a quality product.

During our sprints the frontend web developers implemented and constructed unit tests for the identified user stories and delivery manager coordinated the creation of functional tests and test automation ([seen here](https://github.com/DeloitteDigitalDC/REX/tree/master/evidence/quality-assurance)).  All of the tests were run as an integral part of our build pipeline.  In addition to functional testing, our team also performed [accessibility testing](https://github.com/DeloitteDigitalDC/REX/tree/master/evidence/quality-assurance/accessability).  Our entire [application stack](https://github.com/DeloitteDigitalDC/REX/blob/master/evidence/ReX-App.pdf) leverages free and/or open source technologies like Angular and Node, and we used containerized deployment techniques using Docker to package our application and associated dependencies.

## 4. Deploy

When we ship we work to minimize mistakes.  That’s why we deploy using an automated process with containerized deployments, maximizing our deployment speed while reducing the risk of environment inconsistencies.  Our CI server monitored the code repository for changes made to the production branch (master) and – after a successful compile and test run – built the production container and shipped it to our production environment.  We’re set up to handle all kinds of infrastructure environments, but for this request we used Amazon Web Services virtual server instances for all of our deployment environments – dev/test/prod as well as monitoring and CI.

Just because the app is shipped doesn't mean we're finished. We used a continuous monitoring tool (Nagios) to monitor system status and environment health (e.g. system load, disk usage, current users, current load, etc.), and the environment is set up to notify us when one of the key metrics moves outside normal operating ranges.

When all unit and end-to-end testing was completed and the product manager gave his final approval, we deployed our product to http://askrex.io and uploaded to GitHub for review per the Request for Quotation instructions. In our production environment, we were able to continuously monitor the application to ensure that it was performing as expected.  In addition to uploading [installation instructions](https://github.com/DeloitteDigitalDC/REX/blob/master/INSTALL.md), we have also added [tips](https://github.com/DeloitteDigitalDC/REX/blob/master/USER-TIPS.md) to view some of features of the application.

When we create and deliver a product, it’s more than just working hard days and long hours. It’s a labor of passion and love for us, where each member of our team is committed to putting out the best that they can. To see a little bit of what our process looks like in action, make sure to check out the [video](https://vimeo.com/132462802) we put together and some of the [pictures](https://github.com/DeloitteDigitalDC/REX/tree/master/evidence/media) we captured along the way.

