INSERT INTO resources (category_id, owner_id, title, description, url, resource_img_url, timestamp)
VALUES
-- GIT
(1, 3, 'Git for beginners', 'default description', 'https://launchschool.com/books/git/read/introduction', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techrepublic.com%2Farticle%2Fgit-everything-the-pros-need-to-know%2F&psig=AOvVaw0ABZ0ay6r07jD2GDFsh0jb&ust=1624821155787000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjP99WAtvECFQAAAAAdAAAAABAP', current_timestamp),
(1, 2, 'Git reference', 'default description', 'https://git-scm.com/docs', 'https://git-scm.com/images/logo@2x.png', current_timestamp),
(1, 1, 'Git Zero to Hero', 'default description', 'https://www.codecademy.com/learn/learn-git', 'https://images.codecademy.com/social/logo-codecademy-social.png', current_timestamp),
(1, 4, 'How to install git within VScode', 'default description', 'https://www.jcchouinard.com/install-git-in-vscode/', 'https://www.deployhq.com/attachment/d1974dd4-b8f9-46fe-9491-99e0b0cc5111/thumb1400.png', current_timestamp),
(1, 4, 'Git guide to branches', 'default description', 'https://www.atlassian.com/git/tutorials/using-branches', 'https://www.nobledesktop.com/image/gitresources/git-branches-merge.png', current_timestamp),
(1, 5, 'Difference between Git and Github', 'default description', 'https://www.theserverside.com/video/Git-vs-GitHub-What-is-the-difference-between-them', 'http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/12/git-vs-github4.png', current_timestamp),

-- VIM
(2, 2, 'Vim keyboard shortcuts', 'default description', 'http://www.viemu.com/vi-vim-cheat-sheet.gif', 'https://lh3.googleusercontent.com/proxy/u3z2eHUC_uPqoO7cTNZ5EicN_9MmQ3nGe0Hnn9XfkHtLIDzd1lMRjNY4VOmVkERUVssXhJMfAJP6LgpOoOkfu6i0VRb0zfYCLV14OFawHZlTyWv2LP4Sv2-C7MdurgZdeUN7Cv-UN1Y3DAbW0L7Z3IQ' , current_timestamp),
(2, 3, 'Vim game', 'default description', 'https://vim-adventures.com/', 'https://joelhooks.com/static/15b6526ae3eea04c55ad093c880f47b5/baae7/vim_adventures.jpg' , current_timestamp),
(2, 4, 'The History of Vim', 'default description', 'https://twobithistory.org/2018/08/05/where-vim-came-from.html', 'https://i2.wp.com/deshicompanies.com/wp-content/uploads/2021/03/Garden-Silk-Mills-Limited-1.png?fit=1280%2C720&ssl=1' , current_timestamp),
(2, 1, 'How to Start with Vim', 'default description', 'https://opensource.com/article/19/3/getting-started-vim', 'https://linuxhandbook.com/content/images/2020/06/basic-vim-command-guide.jpeg' , current_timestamp),
(2, 5, 'Why You Should Learn Vim', 'default description', 'https://www.tecmint.com/reasons-to-learn-vi-vim-editor-in-linux/', 'https://res.cloudinary.com/practicaldev/image/fetch/s--6t8eN7U_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2000/1%2AlnYWPVWZIcPFfDiRhfq1JQ.png' , current_timestamp),
(2, 3, 'Copy and Paste in Vim', 'default description', 'https://vim.fandom.com/wiki/Copy,_cut_and_paste', 'https://linoxide.com/wp-content/uploads/2020/09/copy-text-clipboard-vim.png' , current_timestamp),

-- JS
(3, 1, 'Visualize Your Code', 'default description', 'http://pythontutor.com/javascript.html#mode=edit', 'https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/shutterstock_1386882278-1-640x427.jpg', current_timestamp),
(3, 2, 'How to use Template Literals', 'default description', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals', 'https://cdn.nearsoft.com/uploads/2019/12/javascript-template-literals.png', current_timestamp),
(3, 3, 'Sort an Array in JS', 'default description', 'https://www.freecodecamp.org/news/javascript-array-sort-tutorial-how-to-use-js-sort-methods-with-code-examples/', 'https://res.cloudinary.com/practicaldev/image/fetch/s--EbBBF847--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.techagilist.com/wp-content/uploads/2018/06/Sort.png', current_timestamp),
(3, 4, 'Compare Objects in JS', 'default description', 'https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#comments', 'https://dmitripavlutin.com/static/28536a7466b2eec72b7c20040478860b/05127/cover-3.png', current_timestamp),
(3, 5, 'Using settimeout', 'default description', 'https://www.geeksforgeeks.org/how-to-implement-a-function-that-enable-another-function-after-specified-time-using-javascript/', 'https://cdn.educba.com/academy/wp-content/uploads/2020/02/javascript-settimeout.jpg', current_timestamp),
(3, 2, 'JS OOP', 'default description', 'https://exploringjs.com/es6/ch_oop-besides-classes.html#_property-value-shorthands-1', 'https://hackernoon.com/hn-images/1*XlnVJQ392USdQuQcdyvJ4w.png', current_timestamp),

-- HTML/CSS
(4, 1, 'You Should Use SCSS', 'default description', 'https://sass-lang.com/guide', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png', current_timestamp),
(4, 3, 'Basic css', 'default description', 'https://learnxinyminutes.com/docs/css/', 'https://xtrp.io/api/content/static_files/three-modern-css-in-two-minutes/thumbnail.jpg', current_timestamp),
(4, 4, 'CSS Specificity', 'default description', 'https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/', 'https://static.javatpoint.com/csspages/images/css-specificity.png', current_timestamp),
(4, 5, 'How to Flexbox', 'default description', 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', 'https://labs.tadigital.com/wp-content/uploads/2020/06/featured-image.jpg', current_timestamp),
(4, 2, 'CSS in Chrome DevTools', 'default description', 'https://developer.chrome.com/docs/devtools/css/', 'https://i.ytimg.com/vi/T05MBbDz5FU/maxresdefault.jpg', current_timestamp),
(4, 1, 'Methods for Sizing Elements', 'default description', 'https://www.futurehosting.com/blog/web-design-basics-rem-vs-em-vs-px-sizing-elements-in-css/', 'https://labs.tadigital.com/wp-content/uploads/2019/04/PX-vs-EM-vs-REM.jpg', current_timestamp),

-- Node.js
(5, 3, 'Node Guide', 'default description', 'https://nodejs.dev/learn', 'https://miro.medium.com/max/640/1*Ji2aazMsFhKEa8ohgcJh5g.jpeg', current_timestamp),
(5, 1, 'Request Module', 'default description', 'https://stackabuse.com/the-node-js-request-module', 'https://miro.medium.com/max/640/1*Sbp7H_Eu8AprvidNTzcOEQ.png', current_timestamp),
(5, 1, 'fs Data Options', 'default description', 'https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback', 'https://s3.stackabuse.com/media/articles/7bc9c6ac155e0f92998a5b9f85c101a9.png', current_timestamp),
(5, 4, 'Write File', 'default description', 'https://nodejs.dev/learn/writing-files-with-nodejs', 'https://www.codegrepper.com/codeimages/node-js-fs-write-file.png', current_timestamp),
(5, 5, 'Error Handling', 'default description', 'https://www.smashingmagazine.com/2020/08/error-handling-nodejs-error-classes/', 'https://miro.medium.com/max/1050/1*DUVmt95eQTNvy0XNYtN-LQ.png', current_timestamp),
(5, 1, 'Create a server', 'default description', 'https://www.guru99.com/node-js-create-server-get-data.html', 'https://www.guru99.com/images/NodeJS/010716_0600_NodejsHttpT2.png', current_timestamp),

-- Databases
(6, 5, 'Postgres vs Others', 'default description', 'https://www.datacamp.com/community/blog/sql-differences', 'https://cdn.educba.com/academy/wp-content/uploads/2018/12/SQL-Server-vs-PostgreSQL.jpg', current_timestamp),
(6, 4, 'Postgres', 'default description', 'https://www.postgresql.org/', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png', current_timestamp),
(6, 3, 'SQL Joins Explained', 'default description', 'https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/', 'https://www.dofactory.com/img/sql/sql-joins.png', current_timestamp),
(6, 2, 'SQL game', 'default description', 'https://sqlzoo.net/wiki/ROUND', 'https://bigdata-world.net/wp-content/uploads/2020/11/sql-zoo.png', current_timestamp),
(6, 5, 'ERD', 'default description', 'https://www.guru99.com/er-diagram-tutorial-dbms.html', 'https://marvel-b1-cdn.bc0a.com/f00000000152158/www.gliffy.com/sites/gliffy/files/image/2020-07/image-blog-draw-entity-relation-diagram.jpg', current_timestamp),
(6, 4, 'Heroku', 'default description', 'https://www.heroku.com/managed-data-services', 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_bf0fb4cb7fe948c42f37ded73895638f/salesforce-heroku.png', current_timestamp);


