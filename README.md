# Road-to-OSS

Learn some basic workflow of git and GitHub in a few steps. Afterward, let's start contributing to several open-source projects.
And be a part of hackctober fest also. 

To know about hacktoberfest [click here](https://hacktoberfest.com/)

## Requirements

- [A GitHub Account](https://GitHub.com)
- [Git installed in your system](https://docs.GitHub.com/en/get-started/quickstart/set-up-git)
- [Hacktoberfest Account](https://hacktoberfest.com)

**Note:** If you want to be a part of hackctoberfest [complete registration and authorization](https://hacktoberfest.com/register/) before your pull request.

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
    "place": "New York", # Your place -> No longer than 30 characters
    "current_pos": "Web developer", # Your current position (student/freelancer/working etc.) -> No longer than 58 characters
    "image": "johndoe.png", # Name of your portrait image added in the /images directory -> Image size not greater than 200KB
    "bio": "Hi, I'm John! I'm a web developer with in-depth experience in UI/UX design." # A short bio of you -> No longer than 500 characters 
  }
]
```

- Add a portrait image of you with your name and add it to the `images/` directory. If you don't want to add an image use `null` in the json file
- Image size should not be greater than **200KB**
- For the best result use a image with **1:1 ratio**

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

> If you enabled two-factor authentication in your GitHub account you won't be able to push via HTTPS using your accounts password. Instead you need to generate a personal access token. This can be done in the application settings of your GitHub account. Using this token as your password should allow you to push to your remote repository via HTTPS. Use your username as usual.

[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Step 5 - Submit your changes for review

If you go to your repository page on GitHub you will see a `compare & pull request` button. Click that button.
And submit the pull request.
Soon the reviewer will merge the branch into `main`.

## Step 6 - View and share contributors badge

Once the PR is merged you can view your details [here](http://pygrammers.org/Road-to-OSS/).
You can download your profile and share it on social media.

Don't forget to tag Pygrammers :)

## What after that?

Start contributing!

- Check out repos with hacktoberfest topic:
  - [GitHub](https://github.com/topics/hacktoberfest)
  - [GitLab](https://gitlab.com/explore/projects/topics/hacktoberfest)
- Explore Projects with issues:
  - [Up-For-Grabs.net](https://up-for-grabs.net/#/)
  - [GoodFirstIssue.dev](https://goodfirstissue.dev/)
- Explore Hacktoberfest projects:
  - [Hacktoberfest-Projects](https://hacktoberfest-projects.vercel.app/)
  
If this repo helped you get better at open source contributions, consider giving us a star and share the knowledge with your friends :)

