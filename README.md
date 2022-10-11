# Road-to-OSS

@TODO: add an aim section.

## Requirements

- [A GitHub Account](https://GitHub.com)
- [Git installed in your system](https://docs.GitHub.com/en/get-started/quickstart/set-up-git)
- [Hacktoberfest Account](https://hacktoberfest.com)(optional)

---

## Step 1 - Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Step 2 - Clone the forked repository

Now clone the forked repository to your machine:

- Using HTTPS

```sh
git clone "https://GitHub.com/<your-username>/Road-to-OSS.git"
```

- Using SSH

```sh
git clone "git@GitHub.com:<your-username>/Road-to-OSS.git"
```

**Note**: Replace <yout-username> with your GitHub username.

## Step 3 - Create a branch

Change the current working directory to the cloned repo.
For example:

```sh
cd Road-to-OSS
```

Now create a new branch with the below naming convention:

```sh
git switch -c add-your-name
```

For example:

```sh
git switch -c add-shaheen-hyder
```

## Step 3 - Make changes and commit

- Edit the `info.json` file in the project directory to include your information.

```sh
[
......
  {
  # info of previous user
  },
  {
    "name": "John Doe", # Your name -> No longer than 30 characters
    "gh_username": "johndoe" # Your GitHub username
    "email": "johndoe@gmail.com", # Your email (Used to send you a digital badge) -> No longer than 30 characters
    "place": "New York", # Your place -> No longer than 30 characters
    "current_pos": "Web developer", # Your current position (student/freelancer/working etc.) -> No longer than 58 characters
    "image": "johndoe.png", # Name of your portrait image added in the /images directory
    "bio": "Hi, I'm John! I'm a web developer with in-depth experience in UI/UX design." # A short bio of you -> No longer than 500 characters 
  }
]
```

- Add a portrait image of you with your name and add it to the `images/` directory. If you don't want to add an image use `null` in the json file

```sh
{
  ...
  "image": null
  ...
}
```

Now if you go to the project directory and enter the command `git status`, you can see the changes.

Add those changes with the `git add` command:

```sh
git add -A
```

Now commit those changes using the `git commit` command:

```sh
git commit -m "Add <your-name> to contributors list"
```

For example:

```sh
git commit -m "Add Shaheen Hyder to contributors list"
```

## Step 4 - Push the changes to GitHub

Push your changes to GitHub using the `git push` command:

```sh
git push -u origin <your-branch-name>
```

For example:

```sh
git push -u origin add-shaheen-hyder
```

@TODO: add note on the errors that might happen on git push(authentication errors).

## Step 5 - Submit your changes for review

If you go to your repository page on GitHub you will see a `compare & pull request` button. Click that button.
And submit the pull request.
Soon the reviewer will merge the branch into `main`.

## What after that?

@TODO: add a footer section if necessary, with a congratz and detials of hacktoberfest beginner repos.
