let questions = [
    {
        title: 'What is GitHub?',
        options: [
            'A host for Git repositories',
            'An integrated development environment (IDE)',
            'The company that owns Git',
            'All of the above'
        ],
        answer: 0 
    },
    {
        title: 'What is Markdown?',
        options: [
            'A syntax for easily formatting text on the web.',
            'A way to grade projects on GitHub.',
            'A programming language for creating web-based applications.',
            'A way to deploy code to the cloud.'
        ],
        answer: 0 
    },
    {
        title: 'What is a commit?',
        options: [
            'A snapshot of just the changes from one time to the other.',
            'A collection of branches.',
            'A snapshot of all the files in the repository.',
            'Another name for a repository.'
        ],
        answer: 2 
    },
    {
        title: 'What is a branch?',
        options: [
            'A pointer to a specific commit.',
            'A link between the local and remote histories.',
            'The centralized location where repositories are stored.',
            'A version of a file at a specific time.'
        ],
        answer: 0 
    },
    {
        title: 'Which of the following commands will create a new branch?',
        options: [
            'git checkout new-branch',
            'git checkout -b new-branch',
            'git clone new-branch',
            'git create-branch new-branch'
        ],
        answer: 1 
    },
    {
        title: 'Which of the following commands will allow you to change branches?',
        options: [
            'git checkout',
            'git clone',
            'git add',
            'git commit'
        ],
        answer: 0 
    },
    {
        title: 'Which of the following commands will allow you to grab commits from the remote repository into your local repository?',
        options: [
            'git push',
            'git checkout',
            'git add',
            'git pull'
        ],
        answer: 3 
    },
    {
        title: 'Which of the following commands will merge branch-a into the master branch?',
        options: [
            'git checkout branch-a and git merge master',
            'git merge master and git checkout branch-a',
            'git checkout master and git merge branch-a',
            'git merge branch-a and git checkout master'
        ],
        answer: 2 
    },
    {
        title: 'What does the command git branch (without any options) do?',
        options: [
            'Shows you a list of your local branches.',
            'Creates a new branch',
            'Deletes a branch',
            'Renames a branch'
        ],
        answer: 0 
    }
];


export default questions;

