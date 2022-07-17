# Git concepts and Git Hooks

## Git config
- Config levels with each having a config file in [TOML format](https://en.wikipedia.org/wiki/TOML)
    - Repo (./.git/config) - applies to that repo only
    - Global, i.e. user level (~/.gitconfig) - applies to logged in user only
    - System (/usr/local/etc/gitconfig) - applies to all users of the system
- The config file has section and key-value pairs under a section
    [user]
        name=John Doe
        email=john.doe@example.com
- The CLI can be used to set at various levels (specify level in an option). Then use [[section.key]] [[value]] to set key-value.
    - git config --local user.name "John Doe"
    - Similarly --global (i.e. user level), --system (i.e. system level) 
- Viewing config
    - View all configs including path to config files
        - git config --list --show-origin
    - View a particular config
        - git config user.name
- Apart from config values, certain environment variables are also used for configuring git
- There is also the concept of Git Attributes used to configure how Git treats files in a specific folder path during Git operations - example what EOL character to use for files in a folder. This is done through a .gitattributes files (again local, global and system level exists).
- __References__
    - https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration
    - https://git-scm.com/book/en/v2/Customizing-Git-Git-Attributes

## Git Submodules
Submodule is a link within one Git repo to another Git repo. This is one way to share codebase across projects. Alternatives would be to create npm packages, publish, and install wherever required.
- Adding a submodule
```
git submodule add <uri_of_submodule.git> <mount_path>
```
For example
```
git submodule add https://github.com/johndoe/example.git external/example
```
The submodule information is stored under .gitmodules. This file must be checked into the Git repo so that other team members are aware and will be able to make use of submodules.
- Using a repo with submodules
After cloning a repo which has submodules, we must run the following to get the sub module codebase into the repo working folder.
```
git submodule init
git submodule update
```
- __Note__: You need to add and commit to have the submodule code included in your repo's code.
- To check the status of a repo using submodule ```git status```, or difference between commits using ```git diff```, the commands do not do a great job (when submodules exist). Instead we use the following command before running ```git status```, and ```git diff``` to give provide more useful output.
```
git config --global status.submoduleSummary true
git config --global diff.submodule log
```
- You can run ```deinit``` command, followed by removing the submodule folder to remove a submodule
```
git submodule deinit external/example
git rm external/example
```
- __Note__: You need to add and commit to have the submodule code removed from your repo's code.
- __References__
    - https://git-scm.com/book/en/v2/Git-Tools-Submodules

### How to switch to another commit/branch of the submodule
Switch ot the submodule folder and run
```
git fetch
git checkout <branch>
```
Then switch to the parent repo folder and add and commit the submodule updates
```
git add .
git commit -m "updated to new branch of submodule"
```

### Working with submodules
- To clone a repo along with all of its submodules (essentially it additionally runs submodule init and submodule update on for each submodule, after the clone)
```
git clone --recursive <uri_of_repo.git>
```
- __Note__: ```git submodule foreach``` command can be used to view submodules within those submodules
- In order to update to the latest commits of the submodule follow the following steps
```
git pull
git submodule sync --recursive
git submodule update --init --recursive
```
- In order to make changes to a submodule, first set the following - this ensures that when we push commits from out main repo, it also commits to submodule repo if changes have been made there
```
git config --global push.recurseSubmodules on-demand
```
To make changes to a submodule, go within the submodule folder and make the change and commit locally. Now, running ```git push``` from parent module would also push to submodule's remote. Form the parent module, run
```
git push
```

## Git Workflow with Git Hooks
- Hooks are scripts that run when git commands run.
    - Client-side hooks
    - Server-side hooks
- Some hooks in a Git workflow
    - User runs ```git commit -m "message"```
    - pre-commit hook runs
    - prepare-commit-msg hook runs (useful in order to customize commit messages)
    - Commit completed
    - post-commit hook runs (useful for notifications for example)
    - User runs ```git push```
    - pre-receive hook runs (To reject push for example when unit tests fail)
    - update hook runs - this runs per ref (say, per commit, tag etc.) that is being pushed and hence can get called multiple times in a push (if you push multiple commits, tags etc. in a single push)
    - Remote repo updates
    - post-receive hook runs (useful for notifications for example)
- __References__
    - https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
    - https://www.atlassian.com/git/tutorials/git-hooks
    - [How To Use Git Hooks To Automate Development and Deployment Tasks, by Justin Ellingwood (publichsed on DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks)
    - [Understanding Git Hooks, By Amit Prajapati (published on Medium.com)](https://codeburst.io/understanding-git-hooks-in-the-easiest-way-bad9afcbb1b3)

### Client-side hooks
- Some uses
    - Linting
    - Running unit tests
    - Verifying no undesirable code ("todo" mentions, console.log etc.)
    - Preparing a commit message
    - Cleaning up files
- Set up a project with unit tests and lint. Open project folder in VSCode and enable viewing .git folder. Add a ```.git/hooks/pre-commit``` file with contents as such (the ```set -e``` settings enables exit with a non-zero status if the script fails).
```
set -e
npm run lint
npm test
```
Also make this script executable
```
chmod +x .git/hooks/pre-commit
```
Since ```.git``` folder is not committed to the repo, Git provides us a way to configure a separate path for Git hooks. This is committed to source code. This folder is configure such.
```
git config --local core.hooksPath .githooks
```
We place the hooks in ```.githooks``` folder.
- __References__
    - [Sample pre-commit hooks](https://github.com/pre-commit/pre-commit-hooks)

### Server-side hooks
- Some uses
    - Rejecting pushes based on policies - eg. failing tests, non-organization email id, non-conformance to commit message format
        - For rejecting individual branch pushes, use the update hook
    - Notifications
- Set up a mirror / bare clone of a local repository in order to try server-side hooks. Assuming you have a remote repository, clone it such. We shall work on the clone (the bare/mirror clone is set up without remote branches tracking). We do this in order to be able to test the server-side hook we shall be creating, locally.
```
git clone --bare <uri_of_repo.git>
```
or
```
git clone --mirror <uri_of_repo.git>
```
- __References__
    - https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository
- Now set up a clone of the local repository, locally! Note that Git supports cloning local repos, instead of ones hosted on remote servers and accessed via https/ssl protocol.
```
git clone <uri_of_repo.git> <uri_of_local_copy_repo.git>
```
- Within the bare copy of the remote, setup a folder for hooks. Add ```hooks/pre-receive``` and adapt from any of the following sample files
    - https://github.com/github/platform-samples/blob/master/pre-receive-hooks/require-jira-issue.sh
    - https://gist.github.com/pgilad/5d7e4db725a906bd7aa7. Note that this would work only on Unix-like systems like Linux and Mac. For Windows, you can use git bash to commit, and have the hooks work! Make sure to set the message format to the one you desire (eg. your JIRA issue format).
- If your commit is rejected you can amend the commit message like so and then try pushing.
```
git commit --amend
```
- __References__
    - [Changing a commit message](https://docs.github.com/en/github/committing-changes-to-your-project/changing-a-commit-message)
- __NOTE__: This could have been set up as a pre-commit client-side hook but that would not enforce the commit message - for example, the developer can always remove the hook script and make a commit that does not follow the desired commit message format.
- __Reference__
    - https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy