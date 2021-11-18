import json
import os
import subprocess

f = open(os.environ["MIDGARD_PARSER_CONFIG"])
print(os.environ["MIDGARD_PARSER_CONFIG"])
data = json.load(f)
namespace = data["environment"]["name"]
region = data["environment"]["region"]
for eks in data["eks"]:
    print(f'Setting up ecr for {eks["name"]}')
    subprocess.run((
        f'aws eks update-kubeconfig --name {eks["name"]} --region {region}'), shell=True)
    identity_cmd = subprocess.run(
        (f'aws sts get-caller-identity'), text=True, stdout=subprocess.PIPE, shell=True)
    identity_out = json.loads(identity_cmd.stdout)
    subprocess.run(
        f'kubectl create namespace {namespace} --dry-run=client -o yaml | kubectl apply -f -', shell=True)
    secret_cmd = subprocess.run((
        f'kubectl create secret docker-registry ecrargonaut-imgpullsecret --docker-server={identity_out["Account"]}.dkr.ecr.{region}.amazonaws.com --docker-username=AWS --docker-password=$(aws ecr get-login-password) --namespace={namespace} --dry-run=client -o yaml | kubectl apply -f -'),
        shell=True,
        stdout=subprocess.DEVNULL,
    )
f.close()
