export function generateUser() {
  const id = Date.now()

  return {
    firstName: "Bianca",
    lastName: "Andrade",
    username: `user${id}`,
    password: `Pass${id}`
  }
}