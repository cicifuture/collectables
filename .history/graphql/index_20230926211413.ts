export const getUserQuery = `
query GetUser($email:String!) {
    user(by: {email:$email}) {
      id
      email
      name
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
  `

export const createUserMutation = `
mutation CreateUser($input: UserCreateInput!) {
    userCreate(input:$input) {
    user{
      email
      name
      avatarUrl
      description
      githubUrl
      linkedinUrl
      id
    }
    }
  }
  `