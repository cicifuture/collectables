export const getUserQuery = `
query User {
    user(by: {email:$email}) {
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
mutation createUser($input: UserCreateInput!) {
    usercreate(input:$input) {
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