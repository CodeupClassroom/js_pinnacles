> 1. Calculator Timeline
>    - demos tomorrow
> 1. Branching Overview
> 1. Create a branch and delete all things
>    - view on local fs
>    - view in intellij
>    - view on github

# Branching

- video game save points
- Allows us to do development in parallel
- We can create a branch from a common starting point (master)
- Branches can have different commits (files, directories)

```
                            |     |
                            |     * use reverse polish notation
                            |     |
        add cool animations *     |
                            |     |
                            |     * add decimal button
                            |     |
 make calculator responsive *     | 
                             \   /
                              \ /
                               * finish js functionality
                               |
                               * create html structure
                               |
                               * initial commit
       
commits are infrequent for the purposes of demonstration
```

## Intellij

C-v: VCS Popup

1. VCS
2. Git
3. Branches

Current branch is in the bottom-right

## Command Line

View your local branches

```
git branch
```

Create a new branch (but *don't* switch to it)

```
git branch new-branch-name
```

Switch your current branch

```
git checkout branch-name
```

create and switch to a new branch

```
git checkout -b new-branch-name
```

Push your branch to github

```
git push origin my-branch
```

## Once your team is done with basic calculator functionality

1. Create a new branch with your name
1. Continue development on your calculator
1. Push your branch to Github

