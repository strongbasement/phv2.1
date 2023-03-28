# Plant House

## For New Members

- For Developers - develop branch
- For Production - main/master branch

Follow the below to write a clean code and to maintain the code base in ease.

### Work Management 

1. Create new ticket for feature, task, sub-task, bug.
2. Push to GitHub only if you completed the ticket and tested it.
3. Push to the correct remote branch created for the ticket.
4. Always include meaningful messages in the commit and also include the branch name in the commit message.

```
sample message

Changes from PH-185

- Added Registration
- Removed a bug which causes (some errors details)
```


5. Don't push or merge directly to develop or main/master branch without **Pull Requests**.


### Code Management

```shell
# Current branch develop

# Create new branch from develop branch for the ticket
git checkout -b PH-(ticket-number)

# Once completed push it to remote
git pull --all
git push origin PH-(ticket-number)
```