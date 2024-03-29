---
title: "Financial planning concept calculator: Loan/Mortgage overpayment vs Whole Life Insurance"
date: "2021-01-18"
description: "calculator to compare loan or mortgage overpayment option vs investing in WL"
---

Acesssible app with tab navigation and set focus.
This concept was presented during one of financial planning seminars. As I've had actuarial exams in my past, it was not a problem for me but I saw a struggle of many agents to follow instructor's calculations. Most online overpayment calculators offer calculation starting from day one of the mortgage, which is not the case often in real life.

This calculator is devided in 2 parts.

1st - based on the current balance, which is easy to find in the last statement, you can calculate the time starting from today (not from original loan day) when the mortgage or loan can be paid off with the additional amount. Also it calculates the future balance at that time with the current payment schedule, without extra amount.

2nd part is to compare that future balance with the projected cash value at the year of potential payoff using the approach of maximizing CV with funding policy up to MEC limit. In case the LI cash value significanly higher than the target future balance, there are 2 options to consider: to pay off the whole balance (with the tax consideration). The additional benefit here is LI coverage during all those years. And the second option is to continue paying mortgage payments and having tax advantage for interest but the source of payments to be switched to cash value. The separate LI illustration has to be run for that option.

The app has been created with create-react-app. No external libraries were used for forms and error handling.

##Technologies:
React, React Hooks, Styled Components, CSS/SCSS, Jest, Enzyme, Responsive Design w. Neumorphism.

<img src="https://github.com/Svetanek/gatsby-blog/raw/master/src/images/loan-vs-wholelife_screen.png" alt="screenshot calculator"  class="project-img" />

<a href="https://github.com/Svetanek/FinPlanning-concepts" class="project-link"  target="_blank" rel="noopener noreferrer">Github Link</a>

<a href="https://loan-vs-wholelife.netlify.app/" class="project-link"  target="_blank"
        rel="noopener noreferrer">See Live</a>
