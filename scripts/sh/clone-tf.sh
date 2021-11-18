#!/bin/sh

mkdir -p ~/.ssh/ &&
curl -L https://raw.githubusercontent.com/argonautdev/public/main/write-env.py -o write-env.py &&
chmod +x write-env.py &&
./write-env.py ssh-privatekey ~/.ssh/id_rsa_github &&
chmod 600 ~/.ssh/id_rsa_github &&
echo -e "Host github.com\n\tHostName github.com\n\tIdentityFile ~/.ssh/id_rsa_github" > ~/.ssh/config &&
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts &&
git config --global user.email $GIT_USER_EMAIL &&
git config --global user.name $GIT_USER_NAME &&
git clone git@github.com:argonautdev/argonaut_terraform_configs.git /repo &&
cd /repo &&
git checkout $ORGANIZATION_NAME &&
cd .. &&
mkdir templater &&
curl -L $TF_MODULES_LINK -o tf-modules.zip --silent &&
cd templater &&
unzip ../tf-modules.zip &&
mv $(ls -d */ | cut -f1 -d'/' | head -1) tf-modules 