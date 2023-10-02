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