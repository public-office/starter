# Setup

Clone this repo and rename it like so: git@github.com:public-office/starter.git yourname. `cd` into the directory.

Make sure you have homebrew installed by running `brew help` in terminal. If you need to install it, run this in terminal `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`.

Check if Node is installed. Run `node -v` in terminal. If it is not installed, follow this guide: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x 

Check if Yarn is installed. Run `yarn -v` in terminal. If it is not installed, run `brew install yarn` in terminal.

Then ... run `yarn install`. If all goes well it should install all the dependencies in a folder called `node_modules`. Check. If it's there and there are no errors, run `yarn run dev`. This will start listening for changes to css in the `src/scss/style.scss` file. This is sass, not regular css, but you can use that until you learn a little more :-)

Email me if you have any issues.
