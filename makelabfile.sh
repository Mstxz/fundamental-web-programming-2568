#!/bin/bash

mkdir "$1"

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <base_folder> <subfolder1> [subfolder2 ...]"
  exit 1
fi

base_folder="$1"
shift  # remove base_folder from arguments

# Check base folder exists
if [ ! -d "$base_folder" ]; then
  echo "Error: base folder '$base_folder' does not exist."
  exit 1
fi

# Loop through subfolders
for folder in "$@"; do
  target="$base_folder/$folder"

  # Create required directories
  mkdir -p "$target/style"
  mkdir -p "$target/script"

  # Create files if they don't exist
  touch "$target/style/index.css"
  touch "$target/script/index.js"
  touch "$target/index.html"
done

echo "Setup completed."
