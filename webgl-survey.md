---
title: WebGL SE Survey author: Zhen Zhang, Xingan Wang
date: \today
abstract: |
    The survey is trying to answer the questions based on collected facts and statistics:

    1. What is the best practice in programming WebGL programs?
    2. What is the common pitfalls in programming WebGL programs?
header-includes:
    - \usepackage{import}
---

\tableofcontents

\newpage
\part{Introduction}
    \subimport{intro/}{standard}
    \subimport{intro/}{apidoc}
    \subimport{intro/}{eco}
    \subimport{intro/}{apps}
\newpage
\part{Troubles and Trouble-Shooting}
    \subimport{bugs/}{overview}
    \subimport{bugs/}{mdn}
    \subimport{bugs/}{stackoverflow}
    \subimport{bugs/}{threejs}
    \subimport{bugs/}{apps}
    \subimport{bugs/}{trouble-shooting}
    \subimport{bugs/}{stats}
\newpage
\part{Library Support}
    \subimport{libs/}{overview}
    \subimport{libs/}{gl-matrix}
    \subimport{libs/}{threejs}
\newpage
\part{Tool Support}
    \subimport{tools/}{debug-tools}
    \subimport{tools/}{browser}
\newpage
\part{Conclusion}
    \subimport{conclusion/}{best-practice}
    \subimport{conclusion/}{future}
