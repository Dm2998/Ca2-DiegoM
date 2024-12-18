
# . <a name="top"></a>
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=FFFF00&height=120&section=header"/>





<br>

![Description of the image](images/TUD.png)

<br>

## Diego Medina-x00191146.

<br>

## DevOps: CA2.


## Table of Contents.

1. [Overview](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#overview)
2. [Project Structure](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#project-structure)
3. [Technologies Used](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#technologies-used)
4. [Branch Strategy](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#branch-strategy)
5. [Local Development Setup](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#local-development-setup)
    - [Installation](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#installation)
6. [Application Features](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#application-features)
7. [CI Pipeline Implementation](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#ci-pipeline-implementation)
8. [Branch Policies and Protection](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#branch-policies-and-protection)
9. [Troubleshooting Guide](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#troubleshooting-guide)
10. [License](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#license)
11. [Credits](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#credits)
12. [Referenced with URLs](https://github.com/Dm2998/CA2_Devops_24/tree/new-feature-branch#referenced-with-urls)




<br>

# Player Project.

## 1 Overview

The **CA_OOP_Player** project is a Python based application that implements a `Player` class to manage player details such as first name, last name, speed, and nickname. The project also includes unit tests to ensure robust and reliable functionality. Additionally, this project demonstrates the use of a Continuous Integration (CI) pipeline implemented with Azure DevOps to automate the build and test process.

At the center of the project is the Player class, which allows you to create players with details like their first name (fname), last name `lname`, `speed`, `nickname`, and a unique `ID`. For `example`, a player might have the name "Pedro Perez," a speed of 10, and a unique ID of 1. The ID is automatically assigned when the player is created, ensuring every player has a unique identifier.

The `Player` class also keeps a list of all players created, making it possible to perform group operations. For instance, you can calculate the `average speed` of `all players` or find the maximum speed among them. This makes the class both useful for managing individual players and for analyzing data about `multiple players`.

**Example Code:** Creating Players and Checking Their Details.
Here, we create two players. player1 is named "Pedro Perez" with a speed of 10, and player2 is named "Juan Smith" with a speed of 15.


```python
from DM_Player.Player import Player
# Create players
player1 = Player("Pedro", "Perez", 10)
player2 = Player("Juan", "Smith", 15)

# Check details
print(player1.fname)  # Output: Pedro
print(player1.id)     # Output: 1
print(player2.id)     # Output: 2
```

- **What Does the Player Class Do?**

The Player class makes sure that the information provided when creating a player is valid. For example, the speed must be a number greater than zero, and the first and last names cannot be empty. If you try to create a player with invalid data, the program raises an error. Additionally, the Player class has a method to generate a nickname for the player, which is a short version of their name, like "P.Perez" for "Pedro Perez." The class also includes static methods (methods that belong to the class, not to individual players) to calculate things like the average speed of all players.

**Example Code:** Setting a Nickname and Calculating Average Speed

`The average_speed,` method calculates the average speed of all players in the list. In this case, the average of 10 and 20 is 15.

```python
# Create players
player1 = Player("Pedro", "Perez", 10)
player2 = Player("Juan", "Smith", 20)

# Set nicknames
player1.set_nickname()
print(player1.nickname)  # Output: P.Perez

# Calculate average speed
average_speed = Player.average_speed()
print(average_speed)  # Output: 15 (since (10 + 20) / 2 = 15)

```

- **Do Use Unit Tests:**
Unit tests are small programs that automatically check if different parts of the code are working as expected. In this project, the file test_Player.py contains tests written using Python unittest framework. These tests steps:

- If the Player class correctly creates players.
- If nicknames are generated properly.
- If invalid inputs like a speed of zero or empty names cause errors.
- If the average speed and other calculations work correctly.
- By running these tests, we can be confident that the code works correctly.

**Example Code:** A Test for Player Creation
This test creates a player and checks if their first name, last name, speed, and ID are set correctly.
If anything is incorrect, the test will fail, and fix the problem quickly.

```python
class TestPlayer(unittest.TestCase):
    def test_init(self):
        player = Player("Pedro", "Perez", 10)
        self.assertEqual(player.fname, "Pedro")
        self.assertEqual(player.lname, "Perez")
        self.assertEqual(player.speed, 10)
        self.assertEqual(player.id, 1)

if __name__ == '__main__':
    unittest.main()

```
- **How Are Tests Organized:**
The tests are organized in a class called TestPlayer, which runs one test at a time. Before each test, the setUp() method clears the list of players and resets the player count to ensure each test starts with a clean slate. For example:
**Example Code:** Testing Invalid Input.

These tests check that `invalid inputs` like empty `names` or a `speed` of `zero` cause errors. If the Player class doesn’t raise an error for these cases, the test will fail.

```python
def test_invalid_input(self):
    with self.assertRaises(AssertionError):
        Player("", "Perez", 10)  # First name is empty
    with self.assertRaises(AssertionError):
        Player("Pedro", "", 10)  # Last name is empty
    with self.assertRaises(AssertionError):
        Player("Pedro", "Perez", 0)  # Speed is zero
```


- **Automating Testing with Azure Pipelines:**
The project uses Azure Pipelines, a tool that automatically runs tests whenever you push changes to the code repository.

- Run the unit tests and check if all of them pass.
- This configuration runs the tests in the unit_tests folder every time code is pushed to the master branch.
- If a test fails, the pipeline stops, and the developer is notified to fix the issue.



<br>


## 2 Project Structure

This structure appears to be well-organized, with separate `folders` for core functionality, and ensuring a clean Git working directory will improve maintainability. 

- **DM_Player/Player.py**: This is likely the main script or class for the `Player` functionality.

- **unit_tests/test_Player.py**: Contains unit tests for the `Player` class. This script likely contains unit tests for the Player.py file or related components.

- **requirements.txt**: Lists dependencies needed to run the project.

- **.gitignore**: Specifies files and directories to be `ignored` by Git.The root directory and subdirectories to ensure proper exclusion, unnecessary, and other non-essential files.

- **images:** any image-related project requirements.

- **__pycache__/:** Python when it compiles `.py` files. These files can generally be ignored by Git and should be included in the .gitignore file.

- **azure-pipelines.yml:** This file configures the `Azure Pipelines` for Continuous Integration (CI) and Continuous Deployment (CD).  It includes steps to set up Python, run tests, lint the code, and build the project.

- **License:** Contains the license details for the project, specifying how others can use it.

- **Readme:** A file typically used to describe the project, including its purpose, setup instructions, and usage.

- **requirements.txt:** Lists Python dependencies required for the project.

<br>


![Description of the image](images/Project-Structure.png)



<br>


  ## 3 Technologies Used
  Here are the tools and technologies used in this project:

- **Programming Language:** Python 3.8+, used to build the application. 
   <img src="https://img.shields.io/badge/python-%2320232a.svg?style=for-the-badge&logo=python&logoColor=%2361DAFB"/>

- **Source Control:** Git and GitHub, For managing and sharing the project's code. 
   ![GitHub Repo stars](https://img.shields.io/github/stars/Dm2998/CA2_Devops_24?style=for-the-badge&logo=github)

- **Build & CI/CD:** Azure DevOps Pipelines, to automate tasks like building and testing the project.

- **Testing Framework:** `unittest` See the [unittest](https://github.com/Dm2998/CA2_Devops_24/tree/master/unit_tests ) file for details.

- **Dependency Management:** `requirements.txt` See the [requirements.txt](https://github.com/Dm2998/CA2_Devops_24/blob/master/requirements.txt) file for details. Manages dependencies like pylint.


## 4 Branch Strategy 

- **Main Branch:** Contains stable, production-ready code.
- **New Feature Branch or master (`new-feature-branch or master`):** This is where new features are developed before they are merged into the main branch.
To view or switch to the `new-feature-branch`, use the following link:
- [new-feature-branch or master on GitHub, see the](https://github.com/Dm2998/CA2_Devops_24/tree/master?tab=readme-ov-file), file for details.


To switch to the new-feature-branch, use this command:
   
git checkout new-feature-branch

![Description of the image](images/Branches-Strategy.png)

## 5 Local Development Setup
Follow these steps to run the project on your computer:



<br>

## Installation

 
- **1.Clone the repository:** To do this, open your terminal or command prompt and run the following command:
   
   git clone https://github.com/Dm2998/CA2_Devops_24.git
  
- **2.Navigate to the project directory:** After cloning the repository, move into the project directory to start working with the files.
 
cd ~/Devops_testing-main/CA_OOP_Player

- **3.Set up a virtual environment and install dependencies:** Once the environment is activated, install the required dependencies by running:
   pip install -r requirements.txt

- **4. Running the Tests Again:**  After setting everything up, it’s a good idea to ensure that the project is working correctly by running the unit tests.



```
python -m unittest discover -s unit_tests

```
![Description of the image](images/Figure1-all-files-and-setup.png)


## Working with Git

Here are some common Git commands you'll need while working on this project:

```

1. Run the unit tests to verify the setup and Verife Git Status:
   
   git status
   git add .

2. Add a meaningful commit message to describe your changes
   git commit -m "Unittest"

3. Push Changes to Remote Branch
   git push origin main, master and new-feature-branch


```

![Description of the image](images/Add-Commit-Push-Player.png)

<br>

## 6 Application Features

 
- **1. player class Features:**

Attributes: fname, lname, speed, nickname, and id.

- **2. Methods:**
set_nickname:  a nickname for the player using the first letters of their first and last names.



![Description of the image](images/player-code-class-features..png)

<br>

- **3. Unit Testing:** 

The project includes tests to ensure the Player class behaves as expected.



![Description of the image](images/Unit-testing-Player.png)

<br>

## 7 CI Pipeline Implementation


The project includes a robust CI pipeline implemented using Azure DevOps. The pipeline is defined in the azure-pipelines.yml file and includes the following features:

- **1. Build Automation:**

Automated builds are triggered upon commits or pull requests to the repository.


![Description of the image](images/Add-path-enable-Triggers.png)

<br>


- **2. Unit Testing:**

The pipeline automatically runs the unit tests defined in the unit_tests folder.

![Description of the image](images/pipeline-successful-ci-build.png)

<br>



- **3. Code Coverage:**  Code coverage helps you determine the proportion of your project code that is actually being tested by tests such as `unit tests`. To increase your confidence of the code changes, and guard effectively against bugs, your tests should exercise a large proportion of the code.

- See the [Review code coverage](https://learn.microsoft.com/en-us/azure/devops/pipelines/test/review-code-coverage-results?view=azure-devops),file for details.


**Ensures a minimum of 80% test coverage for the Player class.**

![Description of the image](images/Branch-Coverage94.png)



<br>

- **4. Branch Policies Azure:**

Protection rules for the main branch ensure that all code changes are reviewed and tested before being merged. 
- See the [Branch Policies](https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops&viewFallbackFrom=azure&tabs=browser),file for details.


**Prerequisites:**
- To set branch policies, you must be a member of the Project Administrators security group or have repository-level Edit policies permissions.
- To manage branch policies, select Repos > Branches to open the Branches page in the web portal.
- You can also get to branch policy settings with Project Settings > Repository > Policies > Branch Policies > `Branch Name`.
![Description of the image](images/branch-policies.png)

<br>
Add people and groups to Reviewers.


![Description of the image](images/brands-policies.png)

<br>


- **5. Azure-pipeine.yml file:** in `Azure Pipelines`, you can build your `Python apps` without having to set up your own infrastructure. Tools that you commonly use to build, test, and `run Python apps`, including `pip`, are preinstalled.


- See the [Azure-pipeine.yml](https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/customize-python?view=azure-devops),file for details.

Here’s an example of the pipeline configuration:


   azure-pipelines.yml
   

![Description of the image](images/azure-pipelines-yml.png)


<br>


## 8 Branch Policies and Protection repositories with GitHub

- In `GitHub`, branch protection rules can be configured to enforce `specific requirements on branches`. For example, you can require pull request reviews before merging, `enforce status checks`, and restrict who can push to the branch.

- On `GitHub`, navigate to the main page of the `repository`
-To the `right` of the branch protection rule you want to edit, `click Edit`.
-Make your desired changes to the `branch protection` rule.
-`Click` Save changes.

- See the [Branch Policies with GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule), file for `details`.



```
1. Branch Structure:

Development Branch: Active development and feature integration.

2. Protection Rules:

All pull requests require approval.
CI pipeline must pass before merging to main.

3. Commit Guidelines:

descriptive commit messages.
Added unit tests for Player class.


```
![Description of the image](images/Branch-protection-rules-github.png)


## 9 Troubleshooting Guide 

- ** any issues, try the following steps**

- **1.  all required dependencies are installed by running:** Make sure you have installed all the required packages that the project needs.

pip install -r requirements.txt


- **2. Run Unit Tests to Find Errors:**  To run the tests, use this command:
python -m unittest discover -s unit_tests

If a test fails, it means there is a problem in the code. The error message will tell you what went wrong and in which part of the code. Fix the issue and run the tests again to make sure everything works.


- **3. Check CI Pipeline Logs for Errors:** If you are using a CI/CD pipeline, like GitHub  and it fails, you need to check the pipeline logs to understand the problem




![Description of the image](images/update-pipeline-failed.png)
<br>

- **4. Restore the README.md File from an Older Commit:** If the README.md file was accidentally changed or deleted, you can restore it to an earlier version. Use this command to bring back the version from commit: 
git checkout f373b14 -- README.md

<br>

- **5. fix or changes the branchs:**

Sometimes, you might need to switch to a different branch or fix issues in the current branch. Follow these steps:
**To see which branch you are on:**  git branch
**To switch to a different branch:** git checkout name
**To create a new branch:** git checkout -b new-branch-name
for issues :
```
git status
git push origin master --force
```

![Description of the image](images/branch-issues.png)


## 10 License
- This project is licensed under the MIT License. You can read the full [LICENSE](https://github.com/Dm2998/CA2_Devops_24/blob/master/LICENSE) file for details.


![Description of the image](images/Licenses.png)

## 11 Credits
- Author: Diego Medina
- Repository: CA_OOP_Player





## 12 Referenced with URLs
Here are some helpful resources:

🔖 [Referenced 1](https://codefather.tech/blog/python-assert-statement/) <br>
🔖 [Referenced 2](https://codevisionz.com/lessons/python-unittest-module-and-exceptions/) <br>
🔖 [Referenced 3](https://realpython.com/python-type-checking/) <br>
🔖 [Referenced 4](https://docs.python.org/3/library/unittest.html) <br>

<br>




<p align="right">
  <a href="#top" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 15px; border-radius: 5px;">
      Back to Top
  </a>
</p>









<br>




<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=FFFF00&height=120&section=header"/>
