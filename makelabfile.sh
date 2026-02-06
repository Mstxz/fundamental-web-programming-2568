#!/bin/bash
mkdir "$1"

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <base_folder> <subfolder1> [subfolder2 ...]"
  exit 1
fi

base_folder="$1"
shift

# Check base folder exists
if [ ! -d "$base_folder" ]; then
  echo "Error: base folder '$base_folder' does not exist."
  exit 1
fi

for folder in "$@"; do
  target="$base_folder/$folder"

  echo "Setting up $target..."

  # Create directory structure
  mkdir -p "$target/public/style"
  mkdir -p "$target/public/script"
  mkdir -p "$target/public/pages"


  # Create files
  touch "$target/public/index.html"
  touch "$target/server.js"

  # Init npm inside the project folder
  (
    cd "$target"
    npm init -y
    npm install express ejs mysql2 nodemon
  )
done

echo "Setup completed"
