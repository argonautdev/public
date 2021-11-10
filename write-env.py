#!/usr/bin/env python3
import sys
import os

n = len(sys.argv)
if n != 3:
    print("Writes only one env at a time. Call in the format ./script env-name filename.")
env_name = sys.argv[1]
file_name = sys.argv[2]
f = open(file_name, "w+")
if (env := os.environ.get(env_name)) == None:
    print(f'{env_name} not found')
    exit(1)
print(f'writing {env_name} to file {file_name}')
f.write(env)
f.close()