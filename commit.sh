#!/bin/bash

git add .

if [ "$1" = "add" ]; then
    shift
    git commit -m "add: $*"

elif [ "$1" = "change" ] || [ "$1" = "edit" ]; then
    shift
    git commit -m "change: $*"

elif [ "$1" = "remove" ]; then
    shift
    git commit -m "remove: $*"

else
    echo "Usage: $0 {add|change|edit|remove} commit message"
    exit 1
fi

git push

echo "Commit Success \"$0\""
