import subprocess
import re
import sys

# get last commit message
commit_message_command = subprocess.Popen(
    "git log -1 --pretty=format:'%s'",
    shell=True,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT
)

# wait for the subprocess to finish
commit_message_command.wait()

# read all the commit message lines, convert them to string and join them with newline
commit_message = "\n".join([line.decode('utf-8')
                           for line in commit_message_command.stdout.readlines()])

# match
matches = re.findall("(?<=\[).+?(?=\])", commit_message)

print(f"Found last commit message to be: '{commit_message}'")

if len(matches) < 4:
    sys.stderr.write('''
	Not enough [.*] elements in commit message.
	Should have at least four in the form of "[update_action][environment][region][resource] your commit message"
	Below is an example.
	[apply][ekscluster1][us-east-1][eks_prod] Added more tags to cluster
	This is also valid.
	Added more tags to cluster [apply][ekscluster1][us-east-1][eks_prod]
	''')
    exit(1)

action, environment, region, resource = matches[0], matches[1], matches[2], matches[3]

if action not in ["apply", "destroy"]:
    sys.stderr.write(
        f"Invalid action '{action}' should be of type 'apply' or 'destroy'")
    exit(1)

print(
    f"Script in going to run 'terraform {action}' on environment {environment}'s region {region} on resource {resource}")

# python can't set environment variables to parent shell
# Writing a 'variables.sh' file with export for the environment variables
# running 'variables.sh' after 'commit-parser.py' will populate the required variables
# into the shell
lines = []
for name, val in [
        ("ART_INFRA_ACTION", action),
        ("ART_INFRA_ENVIRONMENT", environment),
        ("ART_INFRA_REGION", region),
        ("ART_INFRA_RESOURCE", resource),
]:
    lines.append(f'export "{name}={val}"\n')
f = open("variables.sh", "w+")
f.writelines(lines)
subprocess.Popen("chmod +x ./variables.sh", shell=True)
print("Environment variables written to file 'variables.sh' run 'source ./variables.sh' in the shell to populate env vars")
