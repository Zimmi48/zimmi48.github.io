---
layout: page
lang: en
title: "Linking Open Source Contributors to GitHub Profiles: Improving Identity Resolution in Large-Scale Open Source Software Research"
---

**Duration:** 5-6 months \
**Start date:** Flexible, preferably around March 2025 \
**Stipend:** Typically around 600-700 EUR/month (subject to French public internship regulations) \
**Location:** Télécom Paris \
**Main supervisor:** Théo Zimmermann (Télécom Paris) \
**Co-supervisors:** Stefano Zacchiroli (Télécom Paris), Davide Rossi (University of Bologna) \
**Contact:** see my email address at the bottom of the page

---

## Research Context

Free and Open Source Software (FOSS) has become a cornerstone of modern software infrastructure, yet its long-term sustainability often depends on voluntary contributors. Understanding *who* contributes to open source projects, *where* they are located, and *how* their participation evolves over time is crucial for addressing fundamental questions about the FOSS ecosystem: What barriers do newcomers face? What pathways lead from first contribution to core maintainership? How can we make open source development more inclusive and welcoming to all potential contributors?

Our research team is conducting large-scale empirical studies on contributor participation patterns in open source development, leveraging the [Software Heritage universal archive](https://www.softwareheritage.org/) and various additional datasets. Software Heritage is a non-profit initiative that systematically collects, preserves, and shares the source code of all publicly available software. Unlike most empirical software engineering studies that focus exclusively on GitHub, Software Heritage archives code from *dozens of hosting platforms* (GitHub, GitLab, Bitbucket, Codeberg, SourceForge, and many others) as well as package repositories and historical archives. This comprehensive coverage—spanning billions of commits from millions of projects—enables us to study the *entire open source ecosystem* rather than just one platform's subset.

This broad perspective is crucial because different communities use different platforms. By analyzing millions of contributors across all of public code, we aim to identify universal patterns and platform-specific differences that support sustainable, diverse, and thriving open source communities. Understanding these dynamics—including barriers faced by underrepresented groups such as women (who currently only account for 5-10% of FOSS contributors)—is essential for ensuring the future health of open source ecosystems.

## The Challenge: Author Identity Resolution

One of the fundamental challenges in mining software repositories at scale is **identity resolution**: the same person may appear using slightly different names, email addresses, or pseudonyms across projects and platforms. Moreover, linking these fragmented identities to richer demographic and geographic information remains difficult.

While our past research leveraged names to infer gender and estimated geographic location through various heuristics, we can do much better by exploiting data from GitHub profiles. GitHub being the dominant platform for open source development, many open source developers have GitHub profiles (even if they don't primarily use GitHub for their contributions), and these profiles often provide valuable self-reported information (location, bio, organizations) and behavioral data that could significantly enhance our analyses.

## Research Objectives

This internship aims to develop a robust, scalable methodology for associating Software Heritage commit authors with their corresponding GitHub accounts. Specifically, you will:

1. **Design and implement an efficient linking algorithm** that:
   - Queries the Software Heritage API to discover GitHub origins for commits
   - Uses GitHub's GraphQL API to retrieve author account information
   - Scales to millions of authors while respecting API rate limits

2. **Evaluate the quality and coverage** of the linking methodology:
   - Measure matching success rates across different project types
   - Analyze patterns in unmatched authors
   - Assess the reliability of the associations
   - Compare self-reported locations and pronouns with our existing geographic and gender inference methods

3. **Apply the methodology to research questions**: Many research questions can then be explored with the enriched dataset, such as:
   - Descriptive studies of contributor demographics and geographic distribution, compared across platforms, project types, and over time
   - Analyses of contributor pathways from first contribution to core maintainership, e.g., how many contributions does it take on average to become a maintainer? Is this different for underrepresented groups?
   - Studies exploring the impact of various shocks using econometric methods (e.g., the impact of contributors dropping out entirely from FOSS development on the projects they contributed to, or the impact of national political events on geographically-diverse teams)

The internship will involve both systems programming (API interactions, data pipelines, error handling) and data science (evaluation metrics, quality assessment, exploratory analysis).

## Expected Outcomes

- A documented, reproducible pipeline for linking Software Heritage authors to GitHub accounts
- Empirical evaluation of the method's coverage, accuracy, and limitations
- Enriched dataset ready for various research applications
- Novel research results on open source contributors resulting from the application of the enriched dataset to select research questions
- Research report suitable for publication or inclusion in future papers
- Open source code that benefits the broader research community

## Profile of the Ideal Candidate

We are looking for a motivated Master student with:

### Technical Skills
- Strong programming experience (ideally multiple languages, such as Python, SQL and Rust)
- Optionally, first experience with REST or GraphQL APIs
- Optionally, familiarity with data processing libraries (Pandas/Polars, NumPy)
- Basic understanding of software engineering concepts (commits, repositories, version control)
- Ability to work with large datasets and design scalable solutions

### Research Interests
You should be excited about one or more of the following:
- *Empirical software engineering*: mining software repositories, measuring developer behavior
- *Diversity and inclusion in tech*: understanding and addressing underrepresentation in FOSS
- *Data science for social good*: using large-scale data to study societal phenomena
- *Open science*: working with public archives and contributing to reproducible research

### Personal Qualities
- *Intellectual curiosity*: eager to explore data and discover unexpected patterns
- *Attention to detail*: careful about data quality and edge cases
- *Communication skills*: able to document your work and explain technical decisions
- *Autonomy*: comfortable working independently while collaborating with the research team

## Why This Internship?

- *Real-world impact*: Your work will directly contribute to ongoing research on diversity in open source and inform community efforts to improve inclusion
- *Publication opportunity*: Results may be integrated into academic papers submitted to top software engineering venues
- *Technical depth*: Work with massive-scale datasets and learn about industrial-strength APIs (Software Heritage, GitHub)
- *Research training*: Experience the full research cycle from problem formulation to evaluation
- *Open source contribution*: All code and (where possible) data will be made publicly available
- *Collaborative environment*: Work alongside researchers from Télécom Paris, and international collaborators

### Learning Opportunities

During this internship, you will gain experience with:
- Large-scale data processing and API design patterns
- Empirical research methodologies in software engineering
- Working with historical software repositories and version control data
- Scientific computing and reproducible research practices
- Technical writing and research communication

## How to Apply

Interested candidates should send:
- CV/Resume
- Recent academic transcripts
- A brief statement (1 page) explaining:
  - Your relevant technical experience
  - Why you're interested in this specific research problem
  - Any previous experience with open source, research, or diversity-related work

---

## References & Related Work

- Casanueva, A., Rossi, D., Zacchiroli, S., & Zimmermann, T. (2025). The impact of the COVID-19 pandemic on women’s contribution to public code. *Empirical Software Engineering*.
- Di Cosmo, R., & Zacchiroli, S. (2017). "Software Heritage: Why and How to Preserve Software Source Code." *iPRES*.
- Rossi, D., & Zacchiroli, S. (2022). "Geographic diversity in public code contributions: an exploratory large-scale study over 50 years." *MSR*.
- Terrell et al. (2017). "Gender differences and bias in open source: Pull request acceptance of women versus men." *PeerJ Computer Science*.
- Trinkenreich et al. (2022). "Women's Participation in Open Source Software: A Survey of the Literature." *ACM TOSEM*.
