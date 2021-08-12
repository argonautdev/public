#!/bin/sh


add_configs_for_bash() {
	echo "Generating autocomplete for bash"
	if [[ "$(uname)" == "Darwin" ]]; then
		art completion bash -f art-completion.sh
		sudo mv art-completion.sh /usr/local/etc/bash_completion.d/art
	elif [[ "$(expr substr $(uname -s) 1 5)" == "Linux" ]]; then
		art completion bash -f art-completion.sh
		sudo mv art-completion.sh /etc/bash_completion.d/art
	else 
		echo "Os isn't mac or linux."
		echo "Please run art generate-config bash to get autocomplete and move them to someplace where bash can pick it up when bash is starting"
	fi
}

add_configs_for_zsh() {
	echo "Generating autocomplete for zsh"
	echo "Make sure autocomplete is enabled in your environment for zsh"
	art completion zsh -f art-completion
	echo "Adding completion function to '/usr/local/share/zsh/site-functions', if this directory doesn't exist please create it. And make sure this path is in 'fpath' variable"
	sudo mv art-completion /usr/local/share/zsh/site-functions/_art
	echo "Added completions for zsh. Run a new instance of zsh"
	# ./art completion zsh > "${fpath[1]}/_art"
}

add_configs_for_fish() {
	echo "Generating autocomplete for fish"
	art completion fish > ~/.config/fish/completions/art.fish
}

if [[ $ART_INSTALL_LOCAL == "TRUE" ]];then
	./buildArt.sh
	cd bin
else
	echo "Downloading art binary from public repo"

	if [[ "$(uname)" == "Darwin" ]]; then
		echo "Downloading for darwin"
		curl https://github.com/argonautdev/public/releases/latest/download/art-darwin -L -o art
	elif [[ "$(expr substr $(uname -s) 1 5)" == "Linux" ]]; then
		echo "Downloading for linux"
		curl https://github.com/argonautdev/public/releases/latest/download/art-linux -L -o art
	else 
		echo "Os isn't darwin or linux. Current os doesn't have a binary release"
	fi

fi

echo "Giving art execution permissions"
chmod +x ./art
echo "Moving art to /usr/local/bin/"
sudo mv ./art /usr/local/bin/art

# ./buildArt.sh
# cd bin

#     # Do something under GNU/Linux platform
# elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
#     # Do something under 32 bits Windows NT platform
# elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
#     # Do something under 64 bits Windows NT platform
# fi

if [[ -n $BASH ]]; then
	add_configs_for_bash
fi 
if [[ -n $ZSH_NAME ]]; then
	add_configs_for_zsh
fi
if [[ $SHELL == "fish" ]]; then
	add_configs_for_fish
fi
