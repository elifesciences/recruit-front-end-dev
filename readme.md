# Task

By invitation only.

## Overview

1. fork this repo
1. write code to complete the task, committing as you go. More smaller, granular commits are preferred over one big commit.
1. when you're done, raise a pull request back into the upstream repo in elifesciences   

## Task description
Please provide some code in javascript that makes a call to a service that returns:

article_id_1, author_id_1, author_id_2, author_id_3
article_id_2, author_id_1, author_id_4, author_id_5
.
.
.
article_id_n, author_id_6, author_id_1, author_id_7

For a given author id, list their publications, and co-authors.

Use case: we have a data store organised by articles, but we wish to
create author profiles, with links to articles that the authors have
written, and links to their co-authors.

Response JSON that you might consume could look like: 

```{"articles":[{"id":"article_id_1","authors":["author_id_1","author_id_2","author_id_3","author_id_6"]},{"id":"article_id_2","authors":["author_id_1","author_id_4","author_id_5","author_id_6"]},{"id":"article_id_3","authors":["author_id_1","author_id_2"]},{"id":"article_id_4","authors":["author_id_1","author_id_6"]}]}```

**Bonus 1**: calculate the strongest affiliations between authors, where an affiliation is created when two authors have written a paper together. 

**Bonus 2**: if you're comfortable writing unit tests, please supply tests for your code (TDD preferred).
