// function to generate markdown for README
function generateMarkdown(data) {
let readMe = 
`
# ${data.project_name}

## Description
${data.about_repo}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Test](#test)
* [Contact](#contact)

## Installation
${data.dependencies_command}

## Usage
(insert gif or screenshot here)

## Contributors
${data.contribute_repo}
[GitHub profile link](https://github.com/${data.username})

## License
${data.license} 
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Test
${data.test_command}

## Contact
If you have any questions feel free to reach me at
${data.email}

`
return readMe

;
}

// send the function generateMarkdown to where it's going to be required in index.js
module.exports = generateMarkdown;
