// User model based on the structure of github api at
// https://api.github.com/repositories/{repo_name}

export interface Repo {
	name: string
	owner: string
	description: string
	
}