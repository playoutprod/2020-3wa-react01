# TP1 partie 1

## Notions nécessaires
- github

## Codes a tester

Install Git : [Download link](https://git-scm.com/downloads)

### Install a gui client :

GUI clients : [Download link](https://git-scm.com/download/gui/)

### Command line configuration

Configure git account
```
git config --global user.name "Your name here"
git config --global user.email "your_email@example.com"
git config --global color.ui true
```
Create ssh key
```
ssh-keygen -t rsa -C "your_email@example.com"
pbcopy < ~/.ssh/id_rsa.pub
```
Go to your [github Account Settings](https://github.com/settings/profile)
Click “SSH Keys” on the left.
Click “Add SSH Key” on the right.
Add a label (like “My laptop”) and paste the public key into the big text box.
In a terminal/shell, type the following to test it:
```
ssh -T git@github.com
```

```
git --version
git init
git add [file-name.txt]
git commit -m "[commit message]"
git push
```
