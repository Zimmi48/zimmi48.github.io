---
layout: page
lang: en
title: Research projects ideas
---

The following are project ideas on which I could supervise interested students.
If you are interested in my research topics, but want to discuss a different project, feel free to contact me as well.
If you are a student who is already involved in an open-source community and would like to conduct action-research to improve the software maintenance / collaboration process of the project you are involved in, there are many more ideas related to this that we could discuss.

## Software maintenance and evolution

### Software testing

#### Reverse Dependency Compatibility Testing in Coq/Rocq

**Main research question**: What is the impact of Reverse Dependency Compatibility Testing (RDCT) on proposed evolutions of the Coq proof assistant/Rocq Prover?

The continuous integration (CI) of Coq/Rocq integrates a large number of external projects depending on it. When a change is proposed to Coq/Rocq, the CI will detect if it breaks any of these projects. Furthermore, a bot will then propose to run a "bug minimizer" to produce a reduced test case that reproduces the compatibility issue.

The goal of this project is to study the impact of this process on the proposed evolutions of Coq/Rocq. This would start with a quantitative analysis of CI data. Then, specific pull requests could be selected for a qualitative analysis, to retrace the changes made by the developers after getting feedback from the CI.

## Collaboration in open-source projects

"in open-source projects" is implicit in all the following project titles.

### Decision-making

#### RFCs (Request for Comments)

**Main research question**: How are RFCs used for decision-making in open-source projects?

RFCs were initially popularized by the IETF (Internet Engineering Task Force) to discuss and decide on new Internet standards.
In the context of open source projects, some projects, such as Python, are well-known for using written proposals (PEPs, Python Enhancement Proposals) to discuss and decide on new features, as well as other important decisions (e.g., governance changes).
In recent years, other projects have started to adopt similar processes, such as Rust, Yarn, Vue.js, and have used the generic term RFCs to refer to these proposals.

Having an RFC process can participate in a more open and transparent decision-making process, but it does not always work.
There is no standard way of managing and adopting RFCs, and even if there was, it is not clear that a single process would work for projects with different sizes, goals, and communities.

The first goal of this project would be to create a taxonomy of RFC processes, based on an analysis and comparison of existing processes in different projects, complemented by a literature review of past research on decision-making in open-source projects (which has largely focused on the Python PEP case).

An eventual goal would be to provide recommendations for projects that want to adopt an RFC process and make it successful, depending on their size, and other characteristics.

#### Elections

**Main research question**: When do open-source projects adopt an election process as part of their governance, and how do they implement it?

Open-source projects' governance is often considered as a meritocracy, and this is commonly implemented by co-optation (i.e., the existing maintainers decide who can join them). However, some projects can adopt an election process, e.g., after they reach a certain size, or when they want to change their governance model.

Based on governance documents, their commit history, and the discussions leading to their creation, the first goal would be to establish a taxonomy of the reasons that lead projects to adopt an election process. The second goal would be to compare how the election process is described in governance documents and how it is implemented in practice, in particular, if, after being adopted, the election process is used at the expected frequency, and for how long.

### Issue management

#### Issue labeling

On many platforms, such as GitHub or GitLab, issues can be labeled to categorize them. Labels can be defined by the project maintainers, and they do not necessarily follow a standard or any specific structure. Some projects adopt a structured hierarchy for their labels, e.g., with a prefix indicating the category of the label.

**Research question 1**: Can we observe differences in the characteristics of projects that adopt a structured hierarchy for their labels and those that do not? Can we observe differences in the way issues are managed in these projects and the number of labels used?

**Research question 2**: Is the switch to a structured hierarchy of labels associated with a sudden growth in the number of labels used? Is it associated with a change in the way issues are managed?

The way these research questions would be addressed would be mostly through quantitative methods, using mined software repositories data and regression discontinuity design (RDD) to study the impact of the adoption of a structured hierarchy of labels on the number of labels used and the way issues are managed.

#### The usage of stale bot

A stale bot is a bot that automatically closes issues or pull requests that have not been updated for a certain period of time. Open-source projects often struggle with an ever-growing number of issues and pull requests, and some decide to adopt a stale bot to help manage them. But the usage of a stale bot can also be controversial, as it can close issues that are still relevant, and in which the original reporter had put a lot of effort.

**Research question 1a**: What are the main reasons why project maintainers decide to adopt a stale bot?

**Research question 1b**: What are the main concerns expressed against the usage of a stale bot?

**Research question 2a**: Does the usage of a stale bot address the main reasons why project maintainers decide to adopt it?

**Research question 2b**: Are the main concerns expressed against the usage of a stale bot justified?

Depending on the length of the project, the student could focus on the first two research questions only, or all four.

The first two research questions should be answered using qualitative research methods, probably grounded theory based on analysis of "extent documents" (blog posts, issue and pull request discussions, social media posts, etc.), possibly complemented by interviews with project maintainers if the available data is not sufficient.

The last two research questions should be answered using quantitative research methods, probably based on analysis of the issue and pull request data of a large number of projects.
